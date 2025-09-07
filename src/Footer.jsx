import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube,
  Palette
} from 'lucide-react';



const Footer = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const exploreLinks = [
    'What\'s New',
    'Artists',
    'Artworks',
    'Auctions',
    'Viewing Rooms',
    'Shows'
  ];

  const servicesLinks = [
    'Buy',
    'For Galleries',
    'Price Database',
    'Art Advisory',
    'Selling'
  ];

  const legalLinks = [
    'Terms',
    'Privacy',
    'Cookies'
  ];

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' }
  ];

 return (
   <footer
     style={{
       backgroundColor: "#ffffffff",
       color: "#000000ff",
         marginTop: "50px",
       ...(className
         ? {
             /* keep any extra className if present */
           }
         : {}),
     }}
   >
      <div
              style={{
                width: "100%",
                background: "black",
                border: "2px solid",
                marginTop: "50px",
                marginBottom: "90px",
              }}
            ></div>
     {/* Main Footer Content */}
     <div
       style={{
         padding: "20px 16px",
         /* larger paddings on wider screens are handled by flexible layout here */
       }}
     >
       <div style={{ maxWidth: "100%", marginRight: "20px" , marginLeft: "20px" }}>
         {/* responsive grid replaced by flex wrap so columns collapse naturally */}
         <div
           style={{
             display: "flex",
             flexWrap: "wrap",
             gap: 32,
             marginBottom: 0,
           }}
         >
           {/* Column A: Brand + Newsletter */}
           <div
             style={{
               flex: "1 1 260px", // try to behave like 1/4 on large, full width on small
               minWidth: 260,
               display: "flex",
               flexDirection: "column",
               gap: 18,
             }}
           >
             {/* Logo and Tagline */}
             <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
               <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                 <Palette style={{ width: 28, height: 28, color: "#ff3b3b" }} />
                 <span style={{ fontSize: 18, fontWeight: 600 }}>
                   ArtGallery
                 </span>
               </div>
               <p
                 style={{
                   color: "#000000ff",
                   fontSize: 14,
                   lineHeight: 1.6,
                   margin: 0,
                 }}
               >
                 Discover, collect and sell extraordinary art.
               </p>
             </div>

             {/* Newsletter Signup */}
             <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
               <form
                 onSubmit={handleNewsletterSubmit}
                 style={{ display: "flex", flexDirection: "column", gap: 12 }}
               >
                 <div style={{ position: "relative" }}>
                   <input
                     type="email"
                     value={email}
                     onChange={(e) => {
                       setEmail(e.target.value);
                       if (emailError) setEmailError(false);
                     }}
                     placeholder="Enter your email"
                     aria-label="Email for newsletter subscription"
                     style={{
                       width: "100%",
                       padding: "12px 14px",
                       backgroundColor: "rgba(255,255,255,0.05)",
                       borderRadius: 12,
                       border: emailError
                         ? "1px solid #ef4444"
                         : "1px solid rgba(255,255,255,0.08)",
                       color: "#000000ff",
                       fontSize: 14,
                       outline: "none",
                       transition:
                         "box-shadow 0.2s ease, border-color 0.2s ease",
                         marginBottom: emailError ? "24px" : "0px",
                     }}
                   />
                   {emailError && (
                     <div
                       style={{
                         position: "absolute",
                         bottom: -5,
                         left: 0,
                         color: "#fb7185",
                         fontSize: 12,
                       }}
                     >
                       Please enter a valid email
                     </div>
                   )}
                 </div>

                 <button
                   type="submit"
                   disabled={isSubscribed}
                   style={{
                     width: "100%",
                     // on wider screens you may want the button to be auto-width; keeping full width for simplicity
                     padding: "12px 24px",
                     backgroundColor: "#ff3b3b",
                     color: "#ffffffff",
                     borderRadius: 12,
                     fontSize: 14,
                     fontWeight: 500,
                     border: "none",
                     cursor: isSubscribed ? "not-allowed" : "pointer",
                     opacity: isSubscribed ? 0.6 : 1,
                     transition:
                       "transform 0.15s ease, background-color 0.15s ease, opacity 0.2s ease",
                   }}
                   onMouseEnter={(e) => {
                     if (!isSubscribed)
                       e.currentTarget.style.transform = "scale(1.02)";
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = "none";
                   }}
                 >
                   {isSubscribed ? "✓ Subscribed!" : "Subscribe"}
                 </button>
               </form>

               <p style={{ color: "#000000ff", fontSize: 12, margin: 0 }}>
                 We send weekly highlights. Unsubscribe anytime.
               </p>
             </div>
           </div>

           {/* Column B: Explore */}
           <div
             style={{
               flex: "1 1 200px",
               minWidth: 200,
               display: "flex",
               flexDirection: "column",
               gap: 12,
             }}
           >
             <h3
               style={{
                 color: "#000000ff",
                 fontWeight: 500,
                 fontSize: 18,
                 margin: 0,
               }}
             >
               Explore
             </h3>
             <ul
               style={{
                 padding: 0,
                 margin: 0,
                 listStyle: "none",
                 display: "flex",
                 flexDirection: "column",
                 gap: 12,
               }}
             >
               {exploreLinks.map((link, index) => (
                 <li key={index}>
                   <a
                     href="#"
                     style={{
                       color: "#000000ff",
                       fontSize: 14,
                       textDecoration: "none",
                       transition: "color 0.2s ease",
                     }}
                     onMouseEnter={(e) =>
                       (e.currentTarget.style.color = "#eb0000ff")
                     }
                     onMouseLeave={(e) =>
                       (e.currentTarget.style.color = "#000000ff")
                     }
                   >
                     {link}
                   </a>
                 </li>
               ))}
             </ul>
           </div>

           {/* Column C: Buy & Services */}
           <div
             style={{
               flex: "1 1 200px",
               minWidth: 200,
               display: "flex",
               flexDirection: "column",
               gap: 12,
             }}
           >
             <h3
               style={{
                 color: "#000000ff",
                 fontWeight: 500,
                 fontSize: 18,
                 margin: 0,
               }}
             >
               Buy & Services
             </h3>
             <ul
               style={{
                 padding: 0,
                 margin: 0,
                 listStyle: "none",
                 display: "flex",
                 flexDirection: "column",
                 gap: 12,
               }}
             >
               {servicesLinks.map((link, index) => (
                 <li key={index}>
                   <a
                     href="#"
                     style={{
                       color: "#000000ff",
                       fontSize: 14,
                       textDecoration: "none",
                       transition: "color 0.2s ease",
                     }}
                     onMouseEnter={(e) =>
                       (e.currentTarget.style.color = "#f10a0aff")
                     }
                     onMouseLeave={(e) =>
                       (e.currentTarget.style.color = "#ee0000ff")
                     }
                   >
                     {link}
                   </a>
                 </li>
               ))}
             </ul>
           </div>

           {/* Column D: Connect / Social */}
           <div
             style={{
               flex: "1 1 260px",
               minWidth: 260,
               display: "flex",
               flexDirection: "column",
               gap: 16,
             }}
           >
             <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
               <h3
                 style={{
                   color: "#ffffff",
                   fontWeight: 500,
                   fontSize: 18,
                   margin: 0,
                 }}
               >
                 Connect
               </h3>

               <div
                 style={{
                   display: "flex",
                   flexDirection: "column",
                   gap: 8,
                   fontSize: 14,
                   color: "#000000ff",
                 }}
               >
                 <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                   <Mail style={{ width: 16, height: 16, color: "#BDBDBD" }} />
                   <span>hello@artgallery.com</span>
                 </div>
                 <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                   <Phone style={{ width: 16, height: 16, color: "#BDBDBD" }} />
                   <span>+1 (555) 123-4567</span>
                 </div>
                 <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                   <MapPin
                     style={{ width: 16, height: 16, color: "#BDBDBD" }}
                   />
                   <span>New York, NY</span>
                 </div>
               </div>
             </div>

             <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
               <h4
                 style={{
                   color: "#ffffff",
                   fontWeight: 500,
                   fontSize: 14,
                   margin: 0,
                 }}
               >
                 Follow Us
               </h4>
               <div style={{ display: "flex", gap: 16 }}>
                 {socialLinks.map(({ icon: Icon, label, href }, index) => (
                   <a
                     key={index}
                     href={href}
                     aria-label={label}
                     style={{
                       color: "#BDBDBD",
                       textDecoration: "none",
                       transition: "transform 0.15s ease, color 0.15s ease",
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.color = "#ff3b3b";
                       e.currentTarget.style.transform = "scale(1.1)";
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.color = "#BDBDBD";
                       e.currentTarget.style.transform = "none";
                     }}
                   >
                     <Icon style={{ width: 20, height: 20 }} />
                   </a>
                 ))}
               </div>
             </div>
           </div>
         </div>

         {/* Divider */}
         <div
           style={{
             borderTop: "1px solid rgba(255,255,255,0.06)",
             margin: "24px 0",
           }}
         ></div>

         {/* Bottom Section */}
         <div
           style={{
             display: "flex",
             flexDirection: "column",
             gap: 12,
             justifyContent: "space-between",
           }}
         >
           <div
             style={{
               display: "flex",
               flexWrap: "wrap",
               alignItems: "center",
               gap: 8,
               fontSize: 14,
             }}
           >
             {legalLinks.map((link, index) => (
               <React.Fragment key={index}>
                 <a
                   href="#"
                   style={{
                     color: "#000000ff",
                     textDecoration: "none",
                     transition: "color 0.15s ease",
                   }}
                   onMouseEnter={(e) =>
                     (e.currentTarget.style.color = "#ffffff")
                   }
                   onMouseLeave={(e) =>
                     (e.currentTarget.style.color = "#BDBDBD")
                   }
                 >
                   {link}
                 </a>
                 {index < legalLinks.length - 1 && (
                   <span style={{ color: "#BDBDBD", margin: "0 8px" }}>·</span>
                 )}
               </React.Fragment>
             ))}
           </div>

           <div style={{ color: "#000000ff", fontSize: 14 }}>
             © {new Date().getFullYear()} ArtGallery. All rights reserved.
           </div>
         </div>
       </div>
     </div>
   </footer>
 );

};

export default Footer;