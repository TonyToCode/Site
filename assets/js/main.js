// RSM Competition Program - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Feather Icons
    feather.replace();

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- FAQ Show More/Less Functionality ---
    const showMoreButton = document.getElementById('show-more-faqs');
    const showMoreContainer = document.getElementById('show-more-container');
    const additionalFaqs = document.getElementById('additional-faqs');
    const faqArrow = document.getElementById('faq-arrow');
    let isExpanded = false;

    if (showMoreButton && additionalFaqs && faqArrow && showMoreContainer) {
        showMoreButton.addEventListener('click', () => {
            if (!isExpanded) {
                // Expand - rotate arrow and fade out button
                faqArrow.style.transform = 'rotate(180deg)';
                
                // Fade out the container
                showMoreContainer.style.opacity = '0';
                showMoreContainer.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    showMoreContainer.style.display = 'none';
                    additionalFaqs.classList.remove('hidden');
                    isExpanded = true;
                }, 300);
            }
        });
    }

    // --- Accordion Functionality for FAQ ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('svg');

            // Check if the current accordion is open
            const isOpen = content.style.maxHeight;

            // Close all other accordions first
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    const otherContent = otherHeader.nextElementSibling;
                    const otherIcon = otherHeader.querySelector('svg');
                    if (otherContent) {
                        otherContent.style.maxHeight = null;
                    }
                    if (otherIcon) {
                        otherIcon.style.transform = 'rotate(0deg)';
                    }
                }
            });

            // Toggle the clicked accordion
            if (isOpen) {
                content.style.maxHeight = null;
                if (icon) icon.style.transform = 'rotate(0deg)';
            } else {
                if (content) {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // --- Gemini API Feature Script ---
    const modal = document.getElementById('gemini-modal');
    const modalContentArea = document.getElementById('gemini-modal-content-area');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalLoader = document.getElementById('modal-loader');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalCloseBtnX = document.getElementById('modal-close-btn-x');
    const generateButtons = document.querySelectorAll('.generate-problem-btn');

    const prompts = {
        mcp: {
            title: "Sample MCP Problem",
            prompt: "As an expert in mathematics education for gifted youth, generate a single, challenging math problem suitable for a talented middle school student preparing for competitions like the AMC 8 or Purple Comet. The problem should require logical reasoning or creative thinking, not just standard algorithms. Format the output clearly with 'Problem:' on one line, followed by the problem statement, and then 'Solution:' on a new line, followed by a step-by-step explanation of the solution. Do not include any other text before 'Problem:' or after the solution."
        },
        nmcp: {
            title: "Sample NMCP Problem",
            prompt: "As an expert in advanced mathematics competitions, generate a single, difficult math problem appropriate for a top high school student preparing for the AIME (American Invitational Mathematics Examination). The problem should cover topics like advanced algebra, number theory, combinatorics, or geometry. Format the output clearly with 'Problem:' on one line, followed by the problem statement, and then 'Solution:' on a new line, followed by a detailed, step-by-step explanation of the solution. Do not include any other text before 'Problem:' or after the solution."
        }
    };

    async function callGemini(prompt) {
        // IMPORTANT: The API key is intentionally left blank. 
        // In the target environment, it will be automatically supplied.
        const apiKey = ""; 
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
        
        const payload = {
            contents: [{
                role: "user",
                parts: [{ text: prompt }]
            }]
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts.length > 0) {
            return result.candidates[0].content.parts[0].text;
        } else {
            // This handles cases where the API returns a response, but it's not in the expected format.
            console.error("Unexpected API response structure:", result);
            throw new Error("Invalid response structure from API");
        }
    }

    function openModal() {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
            modal.style.opacity = '1';
            modalContentArea.style.transform = 'scale(1)';
        }, 10);
    }

    function closeModal() {
        modal.style.opacity = '0';
        modalContentArea.style.transform = 'scale(0.95)';
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 300);
    }

    if (generateButtons.length > 0) {
        generateButtons.forEach(button => {
            button.addEventListener('click', async (e) => {
                e.preventDefault();
                const level = button.dataset.level;
                const { title, prompt } = prompts[level];

                // Show modal and loader
                openModal();
                modalTitle.textContent = `✨ Generating ${title}...`;
                modalContent.innerHTML = ''; // Clear previous content
                modalLoader.style.display = 'flex';
                modalContent.appendChild(modalLoader);

                try {
                    const resultText = await callGemini(prompt);
                    
                    // Sanitize and format the output
                    let problem = "Could not parse problem.";
                    let solution = "No solution was provided.";

                    if (resultText.includes('Solution:')) {
                        let parts = resultText.split('Solution:');
                        problem = parts[0].replace('Problem:', '').trim();
                        solution = parts[1].trim();
                    } else {
                        problem = resultText.replace('Problem:', '').trim();
                    }

                    const formattedHtml = `
                        <div class="space-y-4 text-left">
                            <p class="font-semibold text-gray-800">${problem.replace(/\n/g, '<br>')}</p>
                            <hr class="my-4">
                            <p class="font-bold text-rsm-blue">Solution:</p>
                            <p class="text-gray-600">${solution.replace(/\n/g, '<br>')}</p>
                        </div>
                    `;

                    modalTitle.textContent = `✨ ${title}`;
                    modalLoader.style.display = 'none';
                    modalContent.innerHTML = formattedHtml;

                } catch (error) {
                    console.error("Gemini API call failed:", error);
                    modalTitle.textContent = "Error";
                    modalLoader.style.display = 'none';
                    modalContent.innerHTML = `<p class="text-red-500 text-center">Sorry, we couldn't generate a problem at this time. This may be due to high demand or a network issue. Please try again later.</p>`;
                }
            });
        });
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalCloseBtnX) modalCloseBtnX.addEventListener('click', closeModal);

    // Close modal if clicking on the background overlay
    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
});