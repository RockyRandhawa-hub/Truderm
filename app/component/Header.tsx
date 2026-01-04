"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import   logo from "../assets/trudermLogoOne.png"
import Link from "next/link"; 



const Header = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create facial structure
    const faceGroup = new THREE.Group();

    // Head (main sphere) - larger and more refined
    const headGeometry = new THREE.SphereGeometry(2.8, 64, 64);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFE4D6,
      roughness: 0.4,
      metalness: 0.1,
      transparent: true,
      opacity: 0.98,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    faceGroup.add(head);

    // Eyes - more elegant with eyelids
    const eyeWhiteGeometry = new THREE.SphereGeometry(0.28, 20, 20);
    const eyeWhiteMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      roughness: 0.3,
      metalness: 0.05,
    });
    
    const leftEyeWhite = new THREE.Mesh(eyeWhiteGeometry, eyeWhiteMaterial);
    leftEyeWhite.position.set(-0.7, 0.6, 2.5);
    faceGroup.add(leftEyeWhite);

    const rightEyeWhite = new THREE.Mesh(eyeWhiteGeometry, eyeWhiteMaterial);
    rightEyeWhite.position.set(0.7, 0.6, 2.5);
    faceGroup.add(rightEyeWhite);

    // Iris
    const irisGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const irisMaterial = new THREE.MeshStandardMaterial({
      color: 0x4A6E5C,
      roughness: 0.2,
      metalness: 0.3,
    });
    
    const leftIris = new THREE.Mesh(irisGeometry, irisMaterial);
    leftIris.position.set(-0.7, 0.6, 2.75);
    faceGroup.add(leftIris);

    const rightIris = new THREE.Mesh(irisGeometry, irisMaterial);
    rightIris.position.set(0.7, 0.6, 2.75);
    faceGroup.add(rightIris);

    // Pupils
    const pupilGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const pupilMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.1,
      metalness: 0.5,
    });
    
    const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    leftPupil.position.set(-0.7, 0.6, 2.9);
    faceGroup.add(leftPupil);

    const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
    rightPupil.position.set(0.7, 0.6, 2.9);
    faceGroup.add(rightPupil);

    // Eyebrows - elegant arches
    const browCurve1 = new THREE.EllipseCurve(0, 0, 0.5, 0.2, 0, Math.PI, false, 0);
    const browPoints1 = browCurve1.getPoints(20);
    const browGeometry1 = new THREE.BufferGeometry().setFromPoints(browPoints1);
    const browMaterial = new THREE.LineBasicMaterial({ color: 0x8B6F47, linewidth: 2 });
    
    const leftBrow = new THREE.Line(browGeometry1, browMaterial);
    leftBrow.position.set(-0.7, 1.1, 2.6);
    leftBrow.rotation.z = 0.1;
    faceGroup.add(leftBrow);

    const rightBrow = new THREE.Line(browGeometry1, browMaterial);
    rightBrow.position.set(0.7, 1.1, 2.6);
    rightBrow.rotation.z = -0.1;
    faceGroup.add(rightBrow);

    // Nose - more refined
    const noseGeometry = new THREE.ConeGeometry(0.18, 0.6, 8);
    const noseMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFD4C4,
      roughness: 0.5,
      metalness: 0.05,
    });
    const nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.position.set(0, 0.2, 2.7);
    nose.rotation.x = Math.PI / 2;
    faceGroup.add(nose);

    // Lips - fuller and more defined
    const upperLipGeometry = new THREE.TorusGeometry(0.4, 0.12, 12, 20, Math.PI);
    const lipsMaterial = new THREE.MeshStandardMaterial({
      color: 0xD9869C,
      roughness: 0.3,
      metalness: 0.2,
    });
    const upperLip = new THREE.Mesh(upperLipGeometry, lipsMaterial);
    upperLip.position.set(0, -0.5, 2.6);
    upperLip.rotation.x = Math.PI;
    faceGroup.add(upperLip);

    const lowerLipGeometry = new THREE.TorusGeometry(0.4, 0.14, 12, 20, Math.PI);
    const lowerLip = new THREE.Mesh(lowerLipGeometry, lipsMaterial);
    lowerLip.position.set(0, -0.7, 2.6);
    lowerLip.rotation.x = 0;
    faceGroup.add(lowerLip);

    // Cheekbones - more prominent
    const cheekGeometry = new THREE.SphereGeometry(0.6, 20, 20);
    const cheekMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFCBBB,
      roughness: 0.5,
      metalness: 0.05,
      transparent: true,
      opacity: 0.5,
    });
    
    const leftCheek = new THREE.Mesh(cheekGeometry, cheekMaterial);
    leftCheek.position.set(-1.1, 0.1, 2.2);
    leftCheek.scale.set(1, 0.8, 0.4);
    faceGroup.add(leftCheek);

    const rightCheek = new THREE.Mesh(cheekGeometry, cheekMaterial);
    rightCheek.position.set(1.1, 0.1, 2.2);
    rightCheek.scale.set(1, 0.8, 0.4);
    faceGroup.add(rightCheek);

    // Add elegant glow particles around face (skincare theme)
    const particleGeometry = new THREE.SphereGeometry(0.08, 12, 12);
    const particleMaterial = new THREE.MeshStandardMaterial({
      color: 0x99014C,
      transparent: true,
      opacity: 0.8,
      emissive: 0x99014C,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.5,
    });

    const particles: { mesh: THREE.Mesh; angle: number; radius: number; speed: number }[] = [];
    for (let i = 0; i < 25; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);
      const angle = (i / 25) * Math.PI * 2;
      const radius = 4.2 + Math.random() * 0.8;
      particle.position.x = Math.cos(angle) * radius;
      particle.position.y = Math.sin(angle) * radius * 0.8;
      particle.position.z = (Math.random() - 0.5) * 2.5;
      particles.push({ mesh: particle, angle, radius, speed: 0.2 + Math.random() * 0.25 });
      scene.add(particle);
    }

    scene.add(faceGroup);

    // Lighting - more sophisticated setup
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xFFE4D6, 0.6);
    fillLight.position.set(-5, 0, 3);
    scene.add(fillLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Add rim light for better definition
    const rimLight = new THREE.DirectionalLight(0xE8B4C8, 1);
    rimLight.position.set(0, 0, -5);
    scene.add(rimLight);

    // Top light for glow effect
    const topLight = new THREE.PointLight(0xFFB8D9, 0.8, 15);
    topLight.position.set(0, 5, 0);
    scene.add(topLight);

    camera.position.z = 8;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Gentle rotation of face
      faceGroup.rotation.y = Math.sin(Date.now() * 0.0005) * 0.2;
      faceGroup.rotation.x = Math.sin(Date.now() * 0.0003) * 0.1;

      // Animate particles
      particles.forEach((p, index) => {
        p.angle += p.speed * 0.01;
        p.mesh.position.x = Math.cos(p.angle) * p.radius;
        p.mesh.position.y = Math.sin(p.angle) * p.radius * 0.8;
        p.mesh.position.z = Math.sin(Date.now() * 0.001 + index) * 2;
        
        // Pulse effect
        const scale = 1 + Math.sin(Date.now() * 0.002 + index) * 0.3;
        p.mesh.scale.set(scale, scale, scale);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="bg-[#F7EBDF] min-h-screen">
      {/* NAVBAR SECTION */}
   <nav className="border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto gap-4">
          <Image
            src={logo}
            alt="Truderm Logo"
            className="w-40 md:w-48 h-auto object-contain"
          />

          <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base font-medium">
            <Link href="/">
            <li className="hover:text-[#99014C] cursor-pointer transition-colors">
              Home
            </li>
            </Link>
            <Link href="/about-us">
            <li className="hover:text-[#99014C] cursor-pointer transition-colors">
              About
            </li>
            </Link>
            <Link href="/blogs">
            <li className="hover:text-[#99014C] cursor-pointer transition-colors">
              Blogs
            </li>
            </Link>
            <Link href="/treatments"> 
            <li className="hover:text-[#99014C] cursor-pointer transition-colors">
              Treatments
            </li>
            </Link>
            <Link href="/contact"> 
            <li>
              <button className="px-4 md:px-6 py-2 md:py-2.5 bg-black rounded-full text-white hover:bg-[#99014C] transition-all duration-300 font-medium text-sm md:text-base whitespace-nowrap">
                Book Appointment
              </button>
            </li>
            </Link>
          </ul>
        </div>
      </nav>

      {/* HERO CONTENT SECTION */}
      <section className="pt-12 md:pt-20 pb-8 md:pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold mb-4 md:mb-6">
                <span className="text-[#99014C]">Trusted </span>
                Dermatology
                <br />
                <span className="text-[#99014C]">Clinic in Indore</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium text-gray-800 mb-6 md:mb-8">
                Expert Skin & Hair Care with Dr. Garvita Singh.
              </p>

              {/* CTA Button */}
              <button className="px-6 md:px-8 py-2.5 md:py-3 bg-black rounded-full text-white hover:bg-[#99014C] transition-all duration-300 font-medium text-base md:text-lg shadow-lg hover:shadow-xl">
                Book Appointment
              </button>

              {/* Star Sparkle Decoration - Hidden on mobile */}
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-50"
                >
                  <path d="M40 0 L42 38 L40 40 L38 38 Z" fill="#E8B4C8" />
                  <path d="M80 40 L42 42 L40 40 L42 38 Z" fill="#E8B4C8" />
                  <path d="M40 80 L38 42 L40 40 L42 42 Z" fill="#E8B4C8" />
                  <path d="M0 40 L38 38 L40 40 L38 42 Z" fill="#E8B4C8" />
                  <circle cx="40" cy="40" r="8" fill="#D49BB0" />
                </svg>
              </div>
            </div>

            {/* Right 3D Canvas */}
            <div className="relative h-64 md:h-96 lg:h-[500px] w-full">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ display: "block" }}
              />
              
              {/* Decorative gradient orb behind 3D scene */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-gradient-radial from-pink-200/40 to-transparent rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
