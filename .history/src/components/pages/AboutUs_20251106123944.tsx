// import { Target, Eye, Heart, Users, Award, Rocket } from "lucide-react";
// import { FloatingGeometry } from "../FloatingGeometry";
// import { ReferralChain3D } from "../ReferralChain3D";

// export function AboutUs() {
//   const values = [
//     {
//       icon: Shield,
//       title: "Trust & Transparency",
//       description: "Built on blockchain technology ensuring complete transparency",
//       color: "from-cyan-500 to-blue-500",
//     },
//     {
//       icon: Users,
//       title: "Community First",
//       description: "Our success is measured by the success of our community",
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: Rocket,
//       title: "Innovation",
//       description: "Constantly pushing boundaries in financial technology",
//       color: "from-pink-500 to-amber-500",
//     },
//   ];

//   const milestones = [
//     { year: "2021", event: "Company Founded", description: "Started with a vision to democratize finance" },
//     { year: "2022", event: "Platform Launch", description: "Launched our revolutionary referral system" },
//     { year: "2023", event: "50K Users", description: "Reached 50,000 active users worldwide" },
//     { year: "2024", event: "$5M Payout", description: "Achieved $5 million in total user earnings" },
//   ];

//   return (
//     <div className="min-h-screen pt-20">
//       {/* Hero Section with 3D Element */}
//       <section className="relative py-32 overflow-hidden particle-bg">
//         <div className="absolute inset-0">
//           <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
//           <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
//         </div>

//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             {/* Left - Content */}
//             <div className="space-y-6">
//               <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
//                 <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
//                 <span className="text-sm text-cyan-400">About Campaign Waala</span>
//               </div>
              
//               <h1 className="text-5xl md:text-7xl">
//                 <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-glow-cyan">
//                   Redefining
//                 </span>
//                 <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-glow-purple mt-2">
//                   Financial Freedom
//                 </span>
//               </h1>
              
//               <p className="text-xl text-muted-foreground leading-relaxed">
//                 We're building the future of decentralized finance through innovative 
//                 technology and community-driven growth. Our platform empowers individuals 
//                 to create sustainable income streams in the digital economy.
//               </p>

//               <div className="flex flex-wrap gap-4 pt-4">
//                 {[
//                   { label: "Founded", value: "2021" },
//                   { label: "Countries", value: "45+" },
//                   { label: "Users", value: "50K+" },
//                 ].map((stat, i) => (
//                   <div key={i} className="glass rounded-xl px-6 py-4">
//                     <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
//                     <div className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                       {stat.value}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right - Animated GIF */}
//             <div className="relative h-[500px]">
//               <div className="absolute inset-0 glass rounded-3xl border-glow-animated overflow-hidden">
//                 <div className="relative w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 dark:from-cyan-500/20 dark:via-purple-500/20 dark:to-pink-500/20">
//                   {/* Particle System */}
//                   <div className="absolute inset-0">
//                     {[...Array(8)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="absolute w-2 h-2 bg-white dark:bg-cyan-400 rounded-full opacity-0"
//                         style={{
//                           left: '50%',
//                           top: '50%',
//                           animation: `particleFloat${i + 1} ${4 + i * 0.3}s ease-in-out infinite`,
//                           animationDelay: `${i * 0.5}s`,
//                         }}
//                       />
//                     ))}
//                   </div>

//                   {/* Orbiting Coins */}
//                   <div className="absolute w-full h-full">
//                     {['💎', '🚀', '💰', '⚡'].map((icon, i) => (
//                       <div
//                         key={i}
//                         className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//                         style={{
//                           animation: `orbit 8s linear infinite`,
//                           animationDelay: `${-i * 2}s`,
//                         }}
//                       >
//                         <div 
//                           className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-500 dark:to-blue-600 flex items-center justify-center text-2xl shadow-lg"
//                           style={{
//                             transform: 'translateX(180px)',
//                           }}
//                         >
//                           {icon}
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Central Wallet Icon */}
//                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
//                     <div style={{ animation: 'float 3s ease-in-out infinite' }}>
//                       <div className="w-44 h-44 rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 dark:from-amber-500 dark:via-yellow-500 dark:to-amber-600 shadow-2xl flex items-center justify-center relative overflow-hidden">
//                         <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 dark:from-amber-600 dark:to-yellow-600 rounded-t-3xl" />
//                         <div className="text-7xl font-bold text-white/90 animate-pulse">₹</div>
//                         <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
//                       </div>
//                       <div className="absolute inset-0 bg-amber-400/30 dark:bg-amber-500/40 blur-2xl -z-10 animate-pulse" />
//                     </div>
//                   </div>

//                   {/* Connection Lines */}
//                   <div className="absolute inset-0 pointer-events-none">
//                     <div 
//                       className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent dark:via-cyan-500/70"
//                       style={{
//                         top: '35%',
//                         left: '15%',
//                         width: '25%',
//                         animation: 'drawLine 3s ease-in-out infinite',
//                       }}
//                     />
//                     <div 
//                       className="absolute h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent dark:via-purple-500/70"
//                       style={{
//                         top: '60%',
//                         right: '15%',
//                         width: '30%',
//                         animation: 'drawLine 3s ease-in-out infinite',
//                         animationDelay: '1s',
//                       }}
//                     />
//                   </div>

//                   {/* Network Nodes */}
//                   {[
//                     { top: '25%', left: '20%', delay: '0s' },
//                     { top: '30%', right: '25%', delay: '0.4s' },
//                     { top: '65%', left: '30%', delay: '0.8s' },
//                     { top: '60%', right: '20%', delay: '1.2s' },
//                   ].map((pos, i) => (
//                     <div
//                       key={i}
//                       className="absolute w-3 h-3 rounded-full bg-cyan-400 dark:bg-cyan-500 shadow-lg"
//                       style={{
//                         ...pos,
//                         animation: 'pulse 2s ease-in-out infinite',
//                         animationDelay: pos.delay,
//                         boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)',
//                       }}
//                     />
//                   ))}

//                   {/* Bottom Text */}
//                   <div className="absolute bottom-12 text-center w-full px-8">
//                     <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2" style={{ animation: 'glow 2s ease-in-out infinite' }}>
//                       Digital Economy
//                     </h2>
//                     <p className="text-lg text-gray-600 dark:text-gray-300" style={{ animation: 'fadeInOut 3s ease-in-out infinite' }}>
//                       Empowering Your Financial Future
//                     </p>
//                   </div>

//                   {/* CSS Animations */}
//                   <style jsx>{`
//                     @keyframes float {
//                       0%, 100% { transform: translateY(0); }
//                       50% { transform: translateY(-20px); }
//                     }

//                     @keyframes orbit {
//                       from { transform: rotate(0deg) translateX(180px) rotate(0deg); }
//                       to { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
//                     }

//                     @keyframes pulse {
//                       0%, 100% { transform: scale(1); opacity: 1; }
//                       50% { transform: scale(1.5); opacity: 0.5; }
//                     }

//                     @keyframes drawLine {
//                       0%, 100% { transform: scaleX(0); opacity: 0; }
//                       50% { transform: scaleX(1); opacity: 1; }
//                     }

//                     @keyframes glow {
//                       0%, 100% { text-shadow: 0 0 20px rgba(0,0,0,0.1); }
//                       50% { text-shadow: 0 0 40px rgba(34, 211, 238, 0.3); }
//                     }

//                     @keyframes fadeInOut {
//                       0%, 100% { opacity: 0.7; }
//                       50% { opacity: 1; }
//                     }

//                     @keyframes particleFloat1 {
//                       0% { left: 50%; top: 50%; opacity: 0; }
//                       20% { opacity: 1; }
//                       100% { left: 15%; top: 10%; opacity: 0; transform: scale(2); }
//                     }

//                     @keyframes particleFloat2 {
//                       0% { left: 50%; top: 50%; opacity: 0; }
//                       20% { opacity: 1; }
//                       100% { left: 85%; top: 20%; opacity: 0; transform: scale(2); }
//                     }

//                     @keyframes particleFloat3 {
//                       0% { left: 50%; top: 50%; opacity: 0; }
//                       20% { opacity: 1; }
//                       100% { left: 25%; top: 80%; opacity: 0; transform: scale(2); }
//                     }

//                     @keyframes particleFloat4 {
//                       0% { left: 50%; top: 50%; opacity: 0; }
//                       20% { opacity: 1; }
//                       100% { left: 75%; top: 85%; opacity: 0; transform: scale(2); }
//                     }

//                     @keyframes particleFloat5 {
//                       0% { left: 50%; top: 50%; opacity: 0; }
//                       20% { opacity: 1; }
//                       100% { left: 10%; top: 45%; opacity: 0; transform: scale(2); }
//                     }

//                     @keyframes particleFloat6 {
//                       0% { left: 50%; top: 50%; opacity: 0; }
//                       20% { opacity: 1; }
//                       100% { left: 90%; top: 55%; opacity: 0; transform: scale(2); }
//                     }

//                     @keyframes particleFloat7 {
//                       0% { left: 50%; top: 50%; opacity: 0; }
//                       20% { opacity: 1; }
//                       100% { left: 40%; top: 15%; opacity: 0; transform: scale(2); }
//                     }

//                     @keyframes particleFloat8 {
//                       0% { left: 50%; top: 50%; opacity: 0; }
//                       20% { opacity: 1; }
//                       100% { left: 60%; top: 90%; opacity: 0; transform: scale(2); }
//                     }
//                   `}</style>
//                 </div>
//               </div>
//               <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
//               <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision - Asymmetric Layout */}
//       <section className="py-32">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid lg:grid-cols-5 gap-12 items-center mb-24">
//             {/* Mission - Takes 3 columns */}
//             <div className="lg:col-span-3 space-y-6">
//               <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center glow-cyan">
//                 <Target className="w-10 h-10 text-white" />
//               </div>
//               <h2 className="text-4xl md:text-5xl">
//                 <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                   Our Mission
//                 </span>
//               </h2>
//               <p className="text-xl text-muted-foreground leading-relaxed">
//                 To democratize access to financial opportunities by creating a transparent, 
//                 secure, and rewarding ecosystem that empowers every individual to build wealth 
//                 through meaningful connections and strategic partnerships.
//               </p>
//               <div className="glass rounded-2xl p-8 space-y-4">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full" />
//                   <p className="text-muted-foreground">
//                     Provide equal opportunities for financial growth regardless of background
//                   </p>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 mt-2 bg-purple-400 rounded-full" />
//                   <p className="text-muted-foreground">
//                     Leverage blockchain technology for transparency and security
//                   </p>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 mt-2 bg-pink-400 rounded-full" />
//                   <p className="text-muted-foreground">
//                     Build a global community of empowered entrepreneurs
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* 3D Element - Takes 2 columns */}
//             <div className="lg:col-span-2 relative h-[400px]">
//               <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
//                 <FloatingGeometry variant="sphere" />
//               </div>
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-5 gap-12 items-center">
//             {/* 3D Element - Takes 2 columns, comes first on desktop */}
//             <div className="lg:col-span-2 relative h-[400px] order-2 lg:order-1">
//               <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
//                 <ReferralChain3D variant="coin" />
//               </div>
//             </div>

//             {/* Vision - Takes 3 columns */}
//             <div className="lg:col-span-3 space-y-6 order-1 lg:order-2">
//               <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center glow-purple">
//                 <Eye className="w-10 h-10 text-white" />
//               </div>
//               <h2 className="text-4xl md:text-5xl">
//                 <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   Our Vision
//                 </span>
//               </h2>
//               <p className="text-xl text-muted-foreground leading-relaxed">
//                 A world where financial opportunity is accessible to all, where technology 
//                 empowers individuals to build sustainable income streams, and where every 
//                 connection creates value for the entire ecosystem.
//               </p>
//               <div className="glass rounded-2xl p-8 space-y-4">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 mt-2 bg-purple-400 rounded-full" />
//                   <p className="text-muted-foreground">
//                     Become the world's leading decentralized financial platform
//                   </p>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 mt-2 bg-pink-400 rounded-full" />
//                   <p className="text-muted-foreground">
//                     Empower 1 million users to achieve financial independence
//                   </p>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full" />
//                   <p className="text-muted-foreground">
//                     Set new standards for transparency and trust in fintech
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-32 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        
//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-6">
//               <Heart className="w-4 h-4 text-pink-400" />
//               <span className="text-sm text-pink-400">Our Values</span>
//             </div>
//             <h2 className="text-4xl md:text-6xl mb-6">
//               <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 What Drives Us
//               </span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <div
//                 key={index}
//                 className="group relative p-10 glass rounded-3xl hover:scale-105 transition-all duration-300"
//               >
//                 <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
                
//                 <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 glow-cyan`}>
//                   <value.icon className="w-10 h-10 text-white" />
//                 </div>

//                 <h3 className="text-2xl mb-4 group-hover:text-cyan-400 transition-colors">
//                   {value.title}
//                 </h3>
//                 <p className="text-muted-foreground text-lg">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="py-32">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-6">
//               <Award className="w-4 h-4 text-amber-400" />
//               <span className="text-sm text-amber-400">Our Journey</span>
//             </div>
//             <h2 className="text-4xl md:text-6xl">
//               <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                 Milestones
//               </span>
//             </h2>
//           </div>

//           <div className="relative max-w-4xl mx-auto">
//             {/* Timeline line */}
//             <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 -translate-x-1/2 hidden md:block" />

//             <div className="space-y-16">
//               {milestones.map((milestone, index) => (
//                 <div
//                   key={index}
//                   className={`flex items-center gap-8 ${
//                     index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                   }`}
//                 >------------
//                   {/* Content */}
//                   <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
//                     <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform">
//                       <div className="text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
//                         {milestone.year}
//                       </div>
//                       <h3 className="text-2xl mb-2">{milestone.event}</h3>
//                       <p className="text-muted-foreground">{milestone.description}</p>
//                     </div>
//                   </div>

//                   {/* Center dot */}
//                   <div className="relative flex-shrink-0 hidden md:block">
//                     <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 glow-cyan" />
//                   </div>

//                   {/* Spacer */}
//                   <div className="flex-1 hidden md:block" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// function Shield(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//     </svg>
//   );
// }


import { Target, Eye, Heart, Users, Award, Rocket } from "lucide-react";
import { FloatingGeometry } from "../FloatingGeometry";
import { ReferralChain3D } from "../ReferralChain3D";

export function AboutUs() {
  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Built on blockchain technology ensuring complete transparency",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Our success is measured by the success of our community",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly pushing boundaries in financial technology",
      color: "from-pink-500 to-amber-500",
    },
  ];

  const milestones = [
    { year: "2021", event: "Company Founded", description: "Started with a vision to democratize finance" },
    { year: "2022", event: "Platform Launch", description: "Launched our revolutionary referral system" },
    { year: "2023", event: "50K Users", description: "Reached 50,000 active users worldwide" },
    { year: "2024", event: "$5M Payout", description: "Achieved $5 million in total user earnings" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with 3D Element */}
      <section className="relative py-32 overflow-hidden particle-bg">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm text-cyan-400">About Campaign Waala</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl">
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-glow-cyan">
                  Redefining
                </span>
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-glow-purple mt-2">
                  Financial Freedom
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're building the future of decentralized finance through innovative 
                technology and community-driven growth. Our platform empowers individuals 
                to create sustainable income streams in the digital economy.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { label: "Founded", value: "2021" },
                  { label: "Countries", value: "45+" },
                  { label: "Users", value: "50K+" },
                ].map((stat, i) => (
                  <div key={i} className="glass rounded-xl px-6 py-4">
                    <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                    <div className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Animated GIF */}
            <div className="relative h-[500px]">
              <div className="absolute inset-0 glass rounded-3xl border-glow-animated overflow-hidden">
                <div className="relative w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 dark:from-cyan-500/20 dark:via-purple-500/20 dark:to-pink-500/20">
                  {/* Particle System */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white dark:bg-cyan-400 rounded-full opacity-0"
                        style={{
                          left: '50%',
                          top: '50%',
                          animation: `particleFloat${i + 1} ${4 + i * 0.3}s ease-in-out infinite`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Orbiting Coins */}
                  <div className="absolute w-full h-full">
                    {['💎', '🚀', '💰', '⚡'].map((icon, i) => (
                      <div
                        key={i}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          animation: `orbit 8s linear infinite`,
                          animationDelay: `${-i * 2}s`,
                        }}
                      >
                        <div 
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-500 dark:to-blue-600 flex items-center justify-center text-2xl shadow-lg"
                          style={{
                            transform: 'translateX(180px)',
                          }}
                        >
                          {icon}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Central Wallet Icon */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div style={{ animation: 'float 3s ease-in-out infinite' }}>
                      <div className="w-44 h-44 rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 dark:from-amber-500 dark:via-yellow-500 dark:to-amber-600 shadow-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 dark:from-amber-600 dark:to-yellow-600 rounded-t-3xl" />
                        <div className="text-7xl font-bold text-white/90 animate-pulse">₹</div>
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
                      </div>
                      <div className="absolute inset-0 bg-amber-400/30 dark:bg-amber-500/40 blur-2xl -z-10 animate-pulse" />
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div 
                      className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent dark:via-cyan-500/70"
                      style={{
                        top: '35%',
                        left: '15%',
                        width: '25%',
                        animation: 'drawLine 3s ease-in-out infinite',
                      }}
                    />
                    <div 
                      className="absolute h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent dark:via-purple-500/70"
                      style={{
                        top: '60%',
                        right: '15%',
                        width: '30%',
                        animation: 'drawLine 3s ease-in-out infinite',
                        animationDelay: '1s',
                      }}
                    />
                  </div>

                  {/* Network Nodes */}
                  {[
                    { top: '25%', left: '20%', delay: '0s' },
                    { top: '30%', right: '25%', delay: '0.4s' },
                    { top: '65%', left: '30%', delay: '0.8s' },
                    { top: '60%', right: '20%', delay: '1.2s' },
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-cyan-400 dark:bg-cyan-500 shadow-lg"
                      style={{
                        ...pos,
                        animation: 'pulse 2s ease-in-out infinite',
                        animationDelay: pos.delay,
                        boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)',
                      }}
                    />
                  ))}

                  {/* Bottom Text */}
                  <div className="absolute bottom-12 text-center w-full px-8">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2" style={{ animation: 'glow 2s ease-in-out infinite' }}>
                      Digital Economy
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300" style={{ animation: 'fadeInOut 3s ease-in-out infinite' }}>
                      Empowering Your Financial Future
                    </p>
                  </div>

                  {/* CSS Animations */}
                  <style jsx>{`
                    @keyframes float {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(-20px); }
                    }

                    @keyframes orbit {
                      from { transform: rotate(0deg) translateX(180px) rotate(0deg); }
                      to { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
                    }

                    @keyframes pulse {
                      0%, 100% { transform: scale(1); opacity: 1; }
                      50% { transform: scale(1.5); opacity: 0.5; }
                    }

                    @keyframes drawLine {
                      0%, 100% { transform: scaleX(0); opacity: 0; }
                      50% { transform: scaleX(1); opacity: 1; }
                    }

                    @keyframes glow {
                      0%, 100% { text-shadow: 0 0 20px rgba(0,0,0,0.1); }
                      50% { text-shadow: 0 0 40px rgba(34, 211, 238, 0.3); }
                    }

                    @keyframes fadeInOut {
                      0%, 100% { opacity: 0.7; }
                      50% { opacity: 1; }
                    }

                    @keyframes particleFloat1 {
                      0% { left: 50%; top: 50%; opacity: 0; }
                      20% { opacity: 1; }
                      100% { left: 15%; top: 10%; opacity: 0; transform: scale(2); }
                    }

                    @keyframes particleFloat2 {
                      0% { left: 50%; top: 50%; opacity: 0; }
                      20% { opacity: 1; }
                      100% { left: 85%; top: 20%; opacity: 0; transform: scale(2); }
                    }

                    @keyframes particleFloat3 {
                      0% { left: 50%; top: 50%; opacity: 0; }
                      20% { opacity: 1; }
                      100% { left: 25%; top: 80%; opacity: 0; transform: scale(2); }
                    }

                    @keyframes particleFloat4 {
                      0% { left: 50%; top: 50%; opacity: 0; }
                      20% { opacity: 1; }
                      100% { left: 75%; top: 85%; opacity: 0; transform: scale(2); }
                    }

                    @keyframes particleFloat5 {
                      0% { left: 50%; top: 50%; opacity: 0; }
                      20% { opacity: 1; }
                      100% { left: 10%; top: 45%; opacity: 0; transform: scale(2); }
                    }

                    @keyframes particleFloat6 {
                      0% { left: 50%; top: 50%; opacity: 0; }
                      20% { opacity: 1; }
                      100% { left: 90%; top: 55%; opacity: 0; transform: scale(2); }
                    }

                    @keyframes particleFloat7 {
                      0% { left: 50%; top: 50%; opacity: 0; }
                      20% { opacity: 1; }
                      100% { left: 40%; top: 15%; opacity: 0; transform: scale(2); }
                    }

                    @keyframes particleFloat8 {
                      0% { left: 50%; top: 50%; opacity: 0; }
                      20% { opacity: 1; }
                      100% { left: 60%; top: 90%; opacity: 0; transform: scale(2); }
                    }
                  `}</style>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Asymmetric Layout */}
      <section className="py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center mb-24">
            {/* Mission - Takes 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center glow-cyan">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To democratize access to financial opportunities by creating a transparent, 
                secure, and rewarding ecosystem that empowers every individual to build wealth 
                through meaningful connections and strategic partnerships.
              </p>
              <div className="glass rounded-2xl p-8 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full" />
                  <p className="text-muted-foreground">
                    Provide equal opportunities for financial growth regardless of background
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 mt-2 bg-purple-400 rounded-full" />
                  <p className="text-muted-foreground">
                    Leverage blockchain technology for transparency and security
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 mt-2 bg-pink-400 rounded-full" />
                  <p className="text-muted-foreground">
                    Build a global community of empowered entrepreneurs
                  </p>
                </div>
              </div>
            </div>

            {/* SVG Animation - Takes 2 columns */}
            <div className="lg:col-span-2 relative h-[400px]">
              <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#00d4ff', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                    </linearGradient>
                    
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Background - Light/Dark mode compatible */}
                  <rect width="400" height="400" className="fill-white dark:fill-[#0a0e1a]"/>
                  
                  {/* Animated circles (representing ecosystem growth) */}
                  <circle cx="200" cy="200" r="60" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.6">
                    <animate attributeName="r" values="60;120;60" dur="4s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  
                  <circle cx="200" cy="200" r="80" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.5">
                    <animate attributeName="r" values="80;140;80" dur="4s" repeatCount="indefinite" begin="1s"/>
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4s" repeatCount="indefinite" begin="1s"/>
                  </circle>
                  
                  <circle cx="200" cy="200" r="100" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.4">
                    <animate attributeName="r" values="100;160;100" dur="4s" repeatCount="indefinite" begin="2s"/>
                    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="4s" repeatCount="indefinite" begin="2s"/>
                  </circle>
                  
                  {/* Central icon (target/bullseye representing mission) */}
                  <g filter="url(#glow)">
                    <circle cx="200" cy="200" r="35" fill="none" stroke="#a855f7" strokeWidth="3"/>
                    <circle cx="200" cy="200" r="25" fill="none" stroke="#00d4ff" strokeWidth="3"/>
                    <circle cx="200" cy="200" r="15" fill="none" stroke="#a855f7" strokeWidth="3"/>
                    <circle cx="200" cy="200" r="8" fill="#00d4ff"/>
                    
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 200 200"
                      to="360 200 200"
                      dur="8s"
                      repeatCount="indefinite"/>
                  </g>
                  
                  {/* Connection nodes (representing global community) */}
                  <g opacity="0.8">
                    {/* Node 1 */}
                    <circle cx="120" cy="120" r="6" fill="#00d4ff">
                      <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    
                    {/* Node 2 */}
                    <circle cx="280" cy="120" r="6" fill="#a855f7">
                      <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                    </circle>
                    
                    {/* Node 3 */}
                    <circle cx="120" cy="280" r="6" fill="#a855f7">
                      <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" begin="1s"/>
                    </circle>
                    
                    {/* Node 4 */}
                    <circle cx="280" cy="280" r="6" fill="#00d4ff">
                      <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" begin="1.5s"/>
                    </circle>
                    
                    {/* Connecting lines (blockchain network) */}
                    <line x1="120" y1="120" x2="200" y2="200" stroke="#00d4ff" strokeWidth="1" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
                    </line>
                    <line x1="280" y1="120" x2="200" y2="200" stroke="#a855f7" strokeWidth="1" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" begin="0.5s"/>
                    </line>
                    <line x1="120" y1="280" x2="200" y2="200" stroke="#a855f7" strokeWidth="1" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" begin="1s"/>
                    </line>
                    <line x1="280" y1="280" x2="200" y2="200" stroke="#00d4ff" strokeWidth="1" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" begin="1.5s"/>
                    </line>
                  </g>
                  
                  {/* Blockchain blocks animation */}
                  <g opacity="0.3">
                    <rect x="90" y="190" width="20" height="20" fill="#00d4ff" rx="2">
                      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="290" y="190" width="20" height="20" fill="#a855f7" rx="2">
                      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                    </rect>
                    <rect x="190" y="90" width="20" height="20" fill="#a855f7" rx="2">
                      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="1s"/>
                    </rect>
                    <rect x="190" y="290" width="20" height="20" fill="#00d4ff" rx="2">
                      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="1.5s"/>
                    </rect>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* 3D Element - Takes 2 columns, comes first on desktop */}
            <div className="lg:col-span-2 relative h-[400px] order-2 lg:order-1">
              <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
                <ReferralChain3D variant="coin" />
              </div>
            </div>

            {/* Vision - Takes 3 columns */}
            <div className="lg:col-span-3 space-y-6 order-1 lg:order-2">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center glow-purple">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Vision
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A world where financial opportunity is accessible to all, where technology 
                empowers individuals to build sustainable income streams, and where every 
                connection creates value for the entire ecosystem.
              </p>
              <div className="glass rounded-2xl p-8 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 mt-2 bg-purple-400 rounded-full" />
                  <p className="text-muted-foreground">
                    Become the world's leading decentralized financial platform
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 mt-2 bg-pink-400 rounded-full" />
                  <p className="text-muted-foreground">
                    Empower 1 million users to achieve financial independence
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full" />
                  <p className="text-muted-foreground">
                    Set new standards for transparency and trust in fintech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-6">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-pink-400">Our Values</span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                What Drives Us
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-10 glass rounded-3xl hover:scale-105 transition-all duration-300"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
                
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 glow-cyan`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl mb-4 group-hover:text-cyan-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-6">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-400">Our Journey</span>
            </div>
            <h2 className="text-4xl md:text-6xl">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Milestones
              </span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 -translate-x-1/2 hidden md:block" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                 <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                     <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform">
                       <div className="text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                         {milestone.year}
                       </div>
                      <h3 className="text-2xl mb-2">{milestone.event}</h3>
                       <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

//                   {/* Center dot */}
//                   <div className="relative flex-shrink-0 hidden md:block">
//                     <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 glow-cyan" />
//                   </div>

                   {/* Spacer */}                   <div className="flex-1 hidden md:block" />
               </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// function Shield(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//     </svg>
//   );
// }
