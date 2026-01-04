'use client';

import React, { useState } from 'react';
import BlogCard from"./BlogCard"
import BlogDetail from "./BlogDetails";
import Footer from '../Footer';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import trudermLogoOne from "../../assets/trudermLogoOne.png"
// Static blog data - move this to a separate data file later
const blogsData = [
  {
    id: 1,
    title: "Exosomes for Hair Growth: The Future of Hair Restoration",
    date: "May 5, 2025",
    readTime: "7 min read",
    excerpt: "Discover how exosome therapy is revolutionizing hair restoration with cutting-edge regenerative medicine...",
    content: `
      <h2>Revolutionary Hair Restoration with Exosomes</h2>
      <p>Exosome therapy represents the next frontier in hair restoration, offering a scientifically advanced approach to combating hair loss and promoting natural regrowth.</p>
      
      <h3>What Are Exosomes?</h3>
      <p>Exosomes are tiny vesicles derived from stem cells that contain powerful growth factors, proteins, and genetic material. These cellular messengers communicate with your hair follicles, triggering regeneration and rejuvenation at a cellular level.</p>
      
      <h3>How Exosomes Promote Hair Growth</h3>
      <p>When applied to the scalp, exosomes penetrate deep into the follicular environment, stimulating dormant hair follicles and enhancing blood circulation. They reduce inflammation, promote cell proliferation, and create an optimal environment for healthy hair growth.</p>
      
      <h3>Benefits Over Traditional Treatments</h3>
      <p>Unlike conventional treatments, exosome therapy works with your body's natural healing mechanisms. It's minimally invasive, requires no downtime, and shows remarkable results in improving hair density, thickness, and overall scalp health.</p>
      
      <h3>What to Expect</h3>
      <p>Most patients notice visible improvements within 3-6 months. The treatment is virtually painless, takes about 30-45 minutes, and can be combined with other hair restoration protocols for enhanced results.</p>
    `,
    category: "Hair Restoration",
    image: "https://images.unsplash.com/photo-1518103214420-f2994f148502?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    title: "Exosomes for Skin: Unlock Your Skin's Regenerative Power",
    date: "May 6, 2025",
    readTime: "6 min read",
    excerpt: "Experience transformative skin rejuvenation with exosome therapy that works at the cellular level...",
    content: `
      <h2>Cellular Rejuvenation for Radiant Skin</h2>
      <p>Exosome therapy for skin is transforming aesthetic medicine by harnessing the body's natural regenerative capabilities to achieve unprecedented results in skin rejuvenation.</p>
      
      <h3>The Science Behind Skin Exosomes</h3>
      <p>Exosomes deliver potent growth factors directly to skin cells, triggering collagen production, accelerating cellular repair, and reversing visible signs of aging. This targeted approach addresses skin concerns at their root cause.</p>
      
      <h3>Comprehensive Skin Benefits</h3>
      <p>Treatment improves skin texture, reduces fine lines and wrinkles, minimizes pore size, and enhances overall radiance. Patients experience significant improvements in skin elasticity, hydration, and tone uniformity.</p>
      
      <h3>Ideal Candidates</h3>
      <p>Perfect for those seeking natural anti-aging solutions, addressing sun damage, or wanting to enhance skin quality without invasive procedures. Suitable for all skin types and concerns ranging from early aging signs to more advanced skin laxity.</p>
      
      <h3>Treatment Protocol</h3>
      <p>Sessions typically last 45 minutes with minimal discomfort. A series of 3-4 treatments spaced 4-6 weeks apart delivers optimal results, with improvements continuing for several months post-treatment.</p>
    `,
    category: "Skin Rejuvenation",
    image: "https://plus.unsplash.com/premium_photo-1682096433084-b68c0cf072b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "Profhilo: The Injectable Skincare Revolution",
    date: "May 7, 2025",
    readTime: "6 min read",
    excerpt: "Discover how Profhilo delivers bio-remodeling results through pure hyaluronic acid innovation...",
    content: `
      <h2>Bio-Remodeling Excellence with Profhilo</h2>
      <p>Profhilo represents a paradigm shift in aesthetic treatments, offering bio-remodeling benefits that go far beyond traditional dermal fillers to restore youthful skin architecture.</p>
      
      <h3>What Makes Profhilo Unique?</h3>
      <p>Unlike fillers that add volume, Profhilo uses ultra-pure hyaluronic acid to stimulate collagen and elastin production. It spreads smoothly beneath the skin, improving tissue quality and providing exceptional hydration from within.</p>
      
      <h3>The Bio-Remodeling Effect</h3>
      <p>Through a unique injection technique using just 5 precise points per side of the face, Profhilo disperses naturally to remodel aging and sagging tissue. The result is improved skin laxity, texture, and an overall luminous, lifted appearance.</p>
      
      <h3>Optimal Treatment Areas</h3>
      <p>Particularly effective for the face, neck, décolletage, and hands. Addresses crepey skin, fine lines, and loss of elasticity that traditional treatments struggle to improve.</p>
      
      <h3>Treatment Journey</h3>
      <p>Two sessions spaced one month apart provide optimal results lasting 6-9 months. The procedure is quick, with minimal discomfort and no downtime, making it perfect for busy lifestyles.</p>
    `,
    category: "Anti-Aging",
    image: "https://plus.unsplash.com/premium_photo-1671717725651-cccb2edc119d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "Skin Boosters: Hydration from Within for Glowing Skin",
    date: "May 8, 2025",
    readTime: "5 min read",
    excerpt: "Transform your skin with intensive hydration therapy that delivers lasting radiance and improved texture...",
    content: `
      <h2>Deep Hydration for Lasting Radiance</h2>
      <p>Skin boosters provide intensive hydration therapy that transforms dull, dehydrated skin into a radiant, plump, and youthful complexion through micro-injections of hyaluronic acid.</p>
      
      <h3>How Skin Boosters Work</h3>
      <p>These injectable treatments deliver hyaluronic acid deep into the dermis, where it attracts and retains moisture, creating a reservoir of hydration. The result is improved skin quality, elasticity, and a natural glow that radiates from within.</p>
      
      <h3>Key Benefits</h3>
      <p>Experience improved skin texture, reduced fine lines, enhanced elasticity, and a dewy glow. Skin boosters also improve skin firmness, reduce the appearance of pores, and create an ideal canvas for makeup application.</p>
      
      <h3>Perfect For</h3>
      <p>Ideal for those with dehydrated skin, early signs of aging, or anyone seeking to enhance their natural beauty. Particularly beneficial for maintaining skin health in air-conditioned environments or harsh climates.</p>
      
      <h3>Treatment Details</h3>
      <p>A course of 2-3 sessions provides optimal results. The procedure takes about 30 minutes with minimal downtime. Results appear gradually and last 6-9 months with proper maintenance.</p>
    `,
    category: "Skin Treatments",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80"
  },
  {
    id: 5,
    title: "Thread Lift: Non-Surgical Face Lifting for Instant Results",
    date: "May 9, 2025",
    readTime: "7 min read",
    excerpt: "Achieve remarkable lifting and tightening without surgery through advanced thread technology...",
    content: `
      <h2>The Modern Alternative to Surgical Facelifts</h2>
      <p>Thread lifts offer an innovative solution for facial rejuvenation, providing immediate lifting effects and long-term collagen stimulation without the risks and recovery time of traditional surgery.</p>
      
      <h3>Understanding Thread Lift Technology</h3>
      <p>Medical-grade threads with tiny cones or barbs are strategically placed beneath the skin to lift and reposition sagging tissues. As the threads dissolve over time, they stimulate natural collagen production for sustained improvement.</p>
      
      <h3>Transformative Results</h3>
      <p>Experience immediate lifting of the midface, jowls, and neck areas. The treatment redefines facial contours, smooths nasolabial folds, and creates a more youthful jawline definition without altering your natural appearance.</p>
      
      <h3>Advantages Over Surgery</h3>
      <p>Minimal downtime, local anesthesia only, immediate visible results, and a significantly lower cost make thread lifts an attractive option. The procedure takes 45-90 minutes with most patients returning to normal activities within days.</p>
      
      <h3>Longevity and Maintenance</h3>
      <p>Results typically last 18-24 months as threads gradually dissolve while continuing to stimulate collagen. The treatment can be repeated and combined with other procedures for comprehensive facial rejuvenation.</p>
    `,
    category: "Non-Surgical Procedures",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80"
  },
  {
    id: 6,
    title: "Dermal Fillers: Sculpt, Enhance, and Rejuvenate Your Features",
    date: "May 10, 2025",
    readTime: "8 min read",
    excerpt: "From under-eye hollows to jawline definition, discover how strategic filler placement creates harmonious facial enhancement...",
    content: `
      <h2>Artistry Meets Science in Facial Enhancement</h2>
      <p>Dermal fillers have revolutionized aesthetic medicine, offering customizable solutions for facial contouring, volume restoration, and anti-aging with natural-looking results.</p>
      
      <h3>Under-Eye Fillers: Banish Dark Circles and Hollows</h3>
      <p>Tear trough fillers address under-eye hollows and dark circles by restoring lost volume. This delicate treatment brightens the eye area, reduces shadows, and creates a refreshed, well-rested appearance that takes years off your face.</p>
      
      <h3>Lip Fillers: Perfect Your Pout</h3>
      <p>Achieve fuller, more defined lips with precise hyaluronic acid injections. Whether you desire subtle enhancement or dramatic volume, lip fillers can correct asymmetry, define the cupid's bow, and create your ideal lip shape while maintaining natural movement and feel.</p>
      
      <h3>Jawline Fillers: Define Your Contours</h3>
      <p>Jawline enhancement creates striking definition and balance. Strategic filler placement strengthens the jaw angle, reduces jowling, and creates a more masculine or elegantly defined feminine jawline depending on your aesthetic goals.</p>
      
      <h3>Non-Surgical Facelift: Comprehensive Rejuvenation</h3>
      <p>Multiple filler placement points can achieve facelift-like results without surgery. By strategically restoring volume in the cheeks, temples, and midface while contouring the jawline, we create comprehensive facial rejuvenation with immediate results and no downtime.</p>
      
      <h3>Safety and Longevity</h3>
      <p>Modern fillers are FDA-approved, reversible, and provide results lasting 12-24 months depending on the area treated. The procedure takes 30-60 minutes with minimal discomfort and immediate visible improvement.</p>
    `,
    category: "Injectables",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80"
  },
  {
    id: 7,
    title: "Fat Reduction: Science-Backed Solutions for Stubborn Areas",
    date: "May 11, 2025",
    readTime: "6 min read",
    excerpt: "Target resistant fat deposits with advanced non-surgical technologies that deliver lasting body contouring results...",
    content: `
      <h2>Conquer Stubborn Fat Without Surgery</h2>
      <p>Modern fat reduction technologies offer effective solutions for eliminating resistant fat deposits that don't respond to diet and exercise, helping you achieve your ideal body contours.</p>
      
      <h3>Understanding Localized Fat</h3>
      <p>Despite healthy lifestyles, certain body areas accumulate stubborn fat due to genetics, hormones, and aging. These pockets of fat cells resist traditional weight loss methods, requiring targeted treatment approaches.</p>
      
      <h3>Non-Surgical Fat Reduction Methods</h3>
      <p>Advanced technologies including cryolipolysis, radiofrequency, and injectable treatments selectively target and eliminate fat cells permanently. These procedures sculpt problem areas without incisions, anesthesia, or significant downtime.</p>
      
      <h3>Common Treatment Areas</h3>
      <p>Effectively treats abdomen, flanks, thighs, back, arms, and submental area. Multiple areas can be addressed in customized treatment plans tailored to your body contouring goals.</p>
      
      <h3>Results and Timeline</h3>
      <p>Fat cells are gradually eliminated by the body over 8-12 weeks following treatment. Most patients see optimal results after 2-3 sessions, with improvements continuing for several months. Maintaining results requires healthy lifestyle habits.</p>
    `,
    category: "Body Contouring",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
  },
  {
    id: 8,
    title: "CoolSculpting: FDA-Approved Fat Freezing Technology",
    date: "May 12, 2025",
    readTime: "7 min read",
    excerpt: "Freeze away unwanted fat permanently with the world's leading cryolipolysis treatment...",
    content: `
      <h2>Revolutionary Fat Freezing for Lasting Results</h2>
      <p>CoolSculpting uses controlled cooling technology to freeze and eliminate fat cells permanently, offering a proven, FDA-cleared solution for non-invasive body contouring.</p>
      
      <h3>The Science of Cryolipolysis</h3>
      <p>Fat cells are more vulnerable to cold than surrounding tissues. CoolSculpting precisely targets and crystallizes fat cells at specific temperatures, triggering natural cell death. Your body then naturally processes and eliminates these dead cells over time.</p>
      
      <h3>Treatment Experience</h3>
      <p>During your session, an applicator is positioned on the treatment area, delivering controlled cooling. Most patients read, work on laptops, or relax during the 35-60 minute procedure. Initial cooling sensation subsides quickly as the area becomes numb.</p>
      
      <h3>Versatile Application</h3>
      <p>Treats multiple areas including abdomen, love handles, thighs, back fat, upper arms, under chin, and beneath the buttocks. Different applicator sizes allow customization for various body contours.</p>
      
      <h3>Timeline and Results</h3>
      <p>Results appear gradually as your body eliminates treated fat cells. Initial changes visible in 3 weeks, with most dramatic results at 2-3 months. Once eliminated, fat cells don't return, providing lasting body contouring with proper weight maintenance.</p>
    `,
    category: "Body Contouring",
    image: "https://images.unsplash.com/photo-1700308433726-303f30fb96c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    title: "Double Chin Reduction: Reclaim Your Jawline Definition",
    date: "May 13, 2025",
    readTime: "6 min read",
    excerpt: "Eliminate submental fullness with advanced treatments designed specifically for under-chin fat...",
    content: `
      <h2>Transform Your Profile Without Surgery</h2>
      <p>Double chin concerns affect people at any weight, often due to genetics, aging, or skin laxity. Modern treatments offer effective solutions to restore defined jawline contours without invasive surgery.</p>
      
      <h3>Causes of Double Chin</h3>
      <p>Submental fullness results from various factors including genetics, weight gain, aging-related skin laxity, and loss of muscle tone. Even individuals at healthy weights may struggle with this concern due to hereditary fat distribution patterns.</p>
      
      <h3>Injectable Fat Dissolving</h3>
      <p>Deoxycholic acid injections specifically target and destroy fat cells under the chin. The synthetic form of a naturally occurring molecule breaks down fat cell membranes, allowing your body to metabolize and eliminate the fat permanently.</p>
      
      <h3>Cryolipolysis for Chin</h3>
      <p>CoolSculpting offers an alternative approach using controlled cooling to freeze chin fat. The specialized applicator contours to the submental area, providing gradual, natural-looking reduction without injections.</p>
      
      <h3>Results You Can Expect</h3>
      <p>Most patients require 2-4 treatment sessions for optimal results. Improvement becomes noticeable within weeks, with final results visible at 3-6 months. The dramatic profile transformation boosts confidence and enhances facial harmony.</p>
    `,
    category: "Body Contouring",
    image: "https://plus.unsplash.com/premium_photo-1671656349076-0a8ebbb706fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 10,
    title: "Medical Weight Loss: Comprehensive Programs for Lasting Results",
    date: "May 14, 2025",
    readTime: "7 min read",
    excerpt: "Achieve sustainable weight loss through medically supervised programs combining medication, nutrition, and lifestyle coaching...",
    content: `
      <h2>Evidence-Based Weight Management</h2>
      <p>Medical weight loss programs offer comprehensive, physician-supervised solutions that address the complex factors contributing to weight gain, ensuring safe and effective long-term results.</p>
      
      <h3>Comprehensive Assessment</h3>
      <p>Your journey begins with thorough evaluation including metabolic testing, hormonal assessment, and lifestyle analysis. This personalized approach identifies underlying factors affecting your weight and creates a tailored treatment plan.</p>
      
      <h3>FDA-Approved Weight Loss Medications</h3>
      <p>Modern medications including GLP-1 agonists help regulate appetite, improve satiety, and support metabolic function. These scientifically proven treatments, combined with lifestyle modifications, accelerate weight loss while maintaining muscle mass.</p>
      
      <h3>Nutritional Guidance</h3>
      <p>Expert nutritionists create sustainable meal plans that fit your lifestyle. Learn practical strategies for healthy eating, portion control, and making nutritious choices that support long-term weight maintenance.</p>
      
      <h3>Ongoing Support and Monitoring</h3>
      <p>Regular follow-ups ensure progress tracking, medication adjustment, and continued motivation. This medical supervision provides accountability while addressing challenges and celebrating successes throughout your transformation.</p>
    `,
    category: "Weight Management",
    image: "https://images.unsplash.com/photo-1522844990619-4951c40f7eda?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 11,
    title: "Botox: The Gold Standard in Wrinkle Prevention and Treatment",
    date: "May 15, 2025",
    readTime: "6 min read",
    excerpt: "Discover how Botox smooths wrinkles, prevents aging, and creates naturally refreshed facial expressions...",
    content: `
      <h2>Timeless Beauty Through Neuromodulation</h2>
      <p>Botox remains the most popular cosmetic treatment worldwide, offering proven results for smoothing wrinkles and preventing signs of aging with minimal downtime and natural-looking results.</p>
      
      <h3>How Botox Works</h3>
      <p>Botulinum toxin temporarily relaxes specific facial muscles that create wrinkles through repeated expressions. By preventing these contractions, existing lines soften while new wrinkles are prevented from forming.</p>
      
      <h3>Treatment Areas</h3>
      <p>Effectively treats forehead lines, frown lines between eyebrows, crow's feet, bunny lines, and neck bands. Strategic placement can also lift brows, soften a square jaw, reduce excessive sweating, and create subtle facial reshaping.</p>
      
      <h3>Natural-Looking Results</h3>
      <p>Modern Botox techniques preserve natural facial expressions while smoothing unwanted lines. Expert injection ensures you maintain expressiveness and avoid the frozen look, achieving refreshed, youthful appearance.</p>
      
      <h3>Treatment Timeline</h3>
      <p>The quick 10-15 minute procedure requires no downtime. Results appear within 3-5 days, reaching full effect at two weeks. Benefits last 3-4 months, with regular treatments maintaining smooth, youthful skin.</p>
    `,
    category: "Injectables",
    image: "https://images.unsplash.com/photo-1598300188904-6287d52746ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 12,
    title: "Liposuction: Surgical Body Contouring for Dramatic Transformation",
    date: "May 16, 2025",
    readTime: "7 min read",
    excerpt: "Achieve significant fat removal and body sculpting through advanced liposuction techniques...",
    content: `
      <h2>Precision Body Sculpting</h2>
      <p>Liposuction remains the gold standard for removing substantial amounts of stubborn fat and achieving dramatic body contouring results when non-surgical options aren't sufficient.</p>
      
      <h3>Advanced Techniques</h3>
      <p>Modern liposuction methods including tumescent, ultrasound-assisted, and laser-assisted techniques provide precise fat removal with improved skin tightening. These innovations reduce bruising, swelling, and recovery time compared to traditional methods.</p>
      
      <h3>Ideal Candidates</h3>
      <p>Best suited for individuals near their ideal weight with localized fat deposits resistant to diet and exercise. Good skin elasticity ensures optimal contouring results. A comprehensive consultation determines if you're a suitable candidate.</p>
      
      <h3>Treatable Areas</h3>
      <p>Effectively contours abdomen, flanks, thighs, arms, back, chest, and chin. Multiple areas can be addressed in a single procedure for comprehensive body transformation.</p>
      
      <h3>Recovery and Results</h3>
      <p>Most patients return to work within a week, with full activities resumed in 4-6 weeks. Compression garments support healing and contouring. Final results visible at 3-6 months reveal dramatically improved body proportions and enhanced confidence.</p>
    `,
    category: "Surgical Procedures",
    image: "https://plus.unsplash.com/premium_photo-1661387470181-76fe834e6d9b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 13,
    title: "Vaginal Tightening: Restore Intimate Wellness and Confidence",
    date: "May 17, 2025",
    readTime: "6 min read",
    excerpt: "Non-surgical vaginal rejuvenation using advanced technology for improved intimate wellness...",
    content: `
      <h2>Empowering Women's Intimate Health</h2>
      <p>Vaginal tightening treatments address common concerns following childbirth, aging, or hormonal changes, restoring comfort, function, and confidence through non-surgical technology.</p>
      
      <h3>Understanding Vaginal Laxity</h3>
      <p>Childbirth, hormonal changes, and natural aging can lead to vaginal laxity, affecting intimate satisfaction, comfort, and confidence. These changes are normal but treatable without invasive surgery.</p>
      
      <h3>Non-Surgical Solutions</h3>
      <p>Radiofrequency and laser technologies stimulate collagen production in vaginal tissues, improving tightness, elasticity, and lubrication. Treatments are performed in-office with minimal discomfort and no downtime.</p>
      
      <h3>Comprehensive Benefits</h3>
      <p>Patients experience improved vaginal tightness, enhanced sensation, reduced stress incontinence, and increased natural lubrication. Many report renewed confidence and improved quality of life in intimate relationships.</p>
      
      <h3>Treatment Protocol</h3>
      <p>A series of 2-3 sessions provides optimal results. Each 15-20 minute treatment is comfortable with no anesthesia required. Results improve gradually over 3-6 months as new collagen forms, with benefits lasting 12-18 months.</p>
    `,
    category: "Intimate Wellness",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 14,
    title: "Acne and Acne Scar Treatment: Clear Skin Solutions",
    date: "May 18, 2025",
    readTime: "8 min read",
    excerpt: "Comprehensive treatments for active acne and scarring using advanced dermatological approaches...",
    content: `
      <h2>Your Path to Clear, Confident Skin</h2>
      <p>Acne and its aftermath don't have to be permanent. Modern dermatology offers effective solutions for treating active breakouts and reversing acne scarring for smooth, clear skin.</p>
      
      <h3>Understanding Acne</h3>
      <p>Acne results from clogged pores, bacteria, inflammation, and hormonal factors. Successful treatment requires addressing all contributing factors through a comprehensive, customized approach rather than one-size-fits-all solutions.</p>
      
      <h3>Active Acne Treatment</h3>
      <p>Combining prescription medications, professional treatments, and proper skincare effectively controls breakouts. Options include topical retinoids, oral medications, chemical peels, laser therapy, and light-based treatments tailored to your acne type and severity.</p>
      
      <h3>Acne Scar Solutions</h3>
      <p>Advanced treatments including microneedling, fractional lasers, chemical peels, subcision, and dermal fillers dramatically improve acne scars. Treatment selection depends on scar type, depth, and skin type for optimal results.</p>
      
      <h3>Long-Term Success</h3>
      <p>Combining professional treatments with appropriate home care ensures lasting clear skin. Regular follow-ups allow treatment adjustment as your skin responds, maintaining results and preventing new scarring.</p>
    `,
    category: "Acne Treatment",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
  },
  {
    id: 15,
    title: "Melasma Treatment: Effective Solutions for Stubborn Pigmentation",
    date: "May 19, 2025",
    readTime: "7 min read",
    excerpt: "Combat challenging melasma with proven treatments that fade dark patches and restore even skin tone...",
    content: `
      <h2>Conquering Complex Pigmentation</h2>
      <p>Melasma's stubborn dark patches require specialized treatment approaches. Understanding this complex condition is essential for achieving significant improvement and preventing recurrence.</p>
      
      <h3>What Causes Melasma?</h3>
      <p>This chronic pigmentation disorder results from hormonal influences, sun exposure, and genetic predisposition. Commonly triggered by pregnancy, birth control, or hormone therapy, melasma appears as brown or gray-brown patches, typically on the face.</p>
      
      <h3>Comprehensive Treatment Approach</h3>
      <p>Successful melasma management combines multiple strategies: prescription-strength lightening agents, chemical peels, laser treatments, and strict sun protection. Treatments target excess pigment production while preventing new discoloration.</p>
      
      <h3>Advanced Treatment Options</h3>
      <p>Specialized peels like Cosmelan, laser toning, and combination therapy effectively reduce melasma. Treatment plans are customized based on melasma depth, skin type, and triggering factors for optimal, lasting results.</p>
      
      <h3>Maintenance and Prevention</h3>
      <p>Melasma requires ongoing management. Daily broad-spectrum sunscreen, periodic maintenance treatments, and appropriate skincare prevent recurrence. Patient commitment to the treatment plan ensures sustained improvement.</p>
    `,
    category: "Pigmentation",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
  },
  {
    id: 16,
    title: "Cosmelan Peel: The Gold Standard for Melasma Treatment",
    date: "May 20, 2025",
    readTime: "6 min read",
    excerpt: "Experience transformative pigmentation correction with the world-renowned Cosmelan treatment system...",
    content: `
      <h2>Revolutionary Depigmentation System</h2>
      <p>Cosmelan stands as the most effective treatment for melasma and hyperpigmentation, offering dramatic, lasting results through a professionally administered, scientifically advanced protocol.</p>
      
      <h3>How Cosmelan Works</h3>
      <p>This intensive depigmentation treatment inhibits melanin production at multiple levels. The professional mask application in-clinic, followed by home maintenance products, provides comprehensive pigmentation correction that continues improving over months.</p>
      
      <h3>The Treatment Process</h3>
      <p>Your dermatologist applies the Cosmelan mask in office, which remains for 8-12 hours before removal at home. This is followed by a structured home-care regimen using specialized products that continue the depigmentation process.</p>
      
      <h3>Dramatic Results</h3>
      <p>Most patients see significant pigmentation reduction within the first month, with continued improvement for 3-6 months. The treatment effectively addresses melasma, sun damage, age spots, and post-inflammatory hyperpigmentation.</p>
      
      <h3>Aftercare Commitment</h3>
      <p>Success requires dedication to the home maintenance protocol and strict sun protection. Following the complete treatment plan ensures optimal, long-lasting results and prevents pigmentation recurrence.</p>
    `,
    category: "Chemical Peels",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
  },
]
export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  if (selectedBlog) {
    return <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <nav className="  px-6">
        <div className="flex justify-between items-center  max-w-8xl mx-auto">
          <Image 
            src={trudermLogoOne} 
            alt="Truderm Logo" 
            width={150}  
            height={60}
            className="object-contain"
          />
          
          <ul className="flex space-x-8 items-center text-base font-medium">
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
                <button className="px-6 py-2.5 bg-black rounded-full text-white hover:bg-[#99014C] transition-all duration-300 font-medium">
                  Book Appointment
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-[#B65B6A] bg-clip-text text-transparent mb-4">
            Our Latest Blogs
          </h1>
          <p className="text-gray-600 text-lg">
            Insights, stories, and tips for better health and wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogsData.map(blog => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              onClick={setSelectedBlog}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}