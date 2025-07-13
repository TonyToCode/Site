// 3D Logo Component using Three.js and STL Loader
class Logo3D {
    constructor(containerId, stlPath, options = {}) {
        this.container = document.getElementById(containerId);
        this.stlPath = stlPath;
        this.options = {
            width: options.width || 200,
            height: options.height || 80,
            autoRotate: options.autoRotate !== false,
            color: options.color || 0x005dab, // RSM blue
            metalness: options.metalness || 0.3,
            roughness: options.roughness || 0.4,
            ...options
        };
        
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.logo = null;
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        if (!this.container) {
            console.error('Container not found');
            return;
        }
        
        // Create scene
        this.scene = new THREE.Scene();
        
        // Create camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.options.width / this.options.height,
            0.1,
            1000
        );
        
        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ 
            alpha: true, 
            antialias: true 
        });
        this.renderer.setSize(this.options.width, this.options.height);
        this.renderer.setClearColor(0x000000, 0); // Transparent background
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        
        // Add renderer to container
        this.container.appendChild(this.renderer.domElement);
        
        // Add lighting
        this.setupLighting();
        
        // Load STL model
        this.loadSTL();
        
        // Start animation
        this.animate();
        
        // Handle window resize
        window.addEventListener('resize', () => this.onWindowResize());
    }
    
    setupLighting() {
        // Ambient light for overall illumination
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambientLight);
        
        // Main directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 10, 5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        this.scene.add(directionalLight);
        
        // Fill light from the opposite side
        const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
        fillLight.position.set(-10, -10, -5);
        this.scene.add(fillLight);
        
        // Rim light for edge highlighting
        const rimLight = new THREE.DirectionalLight(0xffc72c, 0.2); // RSM gold
        rimLight.position.set(0, 0, -10);
        this.scene.add(rimLight);
    }
    
    loadSTL() {
        const loader = new THREE.STLLoader();
        
        loader.load(
            this.stlPath,
            (geometry) => {
                // Create material
                const material = new THREE.MeshPhysicalMaterial({
                    color: this.options.color,
                    metalness: this.options.metalness,
                    roughness: this.options.roughness,
                    clearcoat: 0.1,
                    clearcoatRoughness: 0.1,
                });
                
                // Create mesh
                this.logo = new THREE.Mesh(geometry, material);
                this.logo.castShadow = true;
                this.logo.receiveShadow = true;
                
                // Center and scale the geometry
                this.centerAndScale();
                
                // Add to scene
                this.scene.add(this.logo);
                
                // Position camera
                this.camera.position.z = 5;
            },
            (progress) => {
                console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
            },
            (error) => {
                console.error('Error loading STL:', error);
                // Fallback to text logo
                this.createFallbackLogo();
            }
        );
    }
    
    centerAndScale() {
        if (!this.logo) return;
        
        // Compute bounding box
        const box = new THREE.Box3().setFromObject(this.logo);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        // Center the geometry
        this.logo.position.sub(center);
        
        // Scale to fit within desired size
        const maxDimension = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDimension; // Adjust this value to change logo size
        this.logo.scale.setScalar(scale);
    }
    
    createFallbackLogo() {
        // Create fallback text logo if STL fails to load
        const loader = new THREE.FontLoader();
        
        // For now, create a simple box as fallback
        const geometry = new THREE.BoxGeometry(2, 0.5, 0.2);
        const material = new THREE.MeshPhysicalMaterial({
            color: this.options.color,
            metalness: this.options.metalness,
            roughness: this.options.roughness,
        });
        
        this.logo = new THREE.Mesh(geometry, material);
        this.logo.castShadow = true;
        this.logo.receiveShadow = true;
        
        this.scene.add(this.logo);
        this.camera.position.z = 5;
    }
    
    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        if (this.logo && this.options.autoRotate) {
            this.logo.rotation.y += 0.005;
        }
        
        this.renderer.render(this.scene, this.camera);
    }
    
    onWindowResize() {
        // Update camera and renderer on window resize
        this.camera.aspect = this.options.width / this.options.height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.options.width, this.options.height);
    }
    
    destroy() {
        // Cleanup
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        if (this.container && this.renderer) {
            this.container.removeChild(this.renderer.domElement);
        }
        
        if (this.renderer) {
            this.renderer.dispose();
        }
    }
}

// Initialize 3D logos when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize header logo
    const headerLogo = document.getElementById('header-logo-3d');
    if (headerLogo) {
        new Logo3D('header-logo-3d', './rsm.stl', {
            width: 200,
            height: 60,
            autoRotate: true,
            color: 0x005dab,
            metalness: 0.2,
            roughness: 0.3
        });
    }
    
    // Initialize hero logo if exists
    const heroLogo = document.getElementById('hero-logo-3d');
    if (heroLogo) {
        new Logo3D('hero-logo-3d', './rsm.stl', {
            width: 300,
            height: 120,
            autoRotate: true,
            color: 0xffc72c, // Gold for hero
            metalness: 0.4,
            roughness: 0.2
        });
    }
});