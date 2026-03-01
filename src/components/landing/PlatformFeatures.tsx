import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Video, Phone, Shuffle, Zap, Sparkles, ScanFace, Heart,
  Gift, MessageCircle, Rocket, Crown, ThumbsUp, EyeOff,
  Coins, Inbox, ArrowRight, UserCircle2, Calendar,
  Shield, DollarSign, Filter, Users, KeyRound, Clock, Radio
} from "lucide-react";
import { useState } from "react";
import videoProfileImg from "@/assets/images/videoprofile.png";
import videoDateImg from "@/assets/images/videodate.png";
import audioVideoCallImg from "@/assets/images/audiovideocall.png";
import randomCallingImg from "@/assets/images/randomcalling.png";
import speedDatingImg from "@/assets/images/speeddating.png";
import arFiltersImg from "@/assets/images/arfilters.png";
import matchFeedImg from "@/assets/images/matchfeed.png";
import likeProfileImg from "@/assets/images/likeprofile.png";
import boostProfileImg from "@/assets/images/boostprofile.png";
import inAppChatImg from "@/assets/images/inappchat.png";
import paidChatImg from "@/assets/images/paidchat.png";
import sendCoinsImg from "@/assets/images/sendcoins.png";
import subscriptionImg from "@/assets/images/subscription.png";
import coinWalletImg from "@/assets/images/coinnwallet.png";
import faceVerificationImg from "@/assets/images/faceverification.png";
import anonymityImg from "@/assets/images/anonymity.png";

const categories = [
  { id: "video", label: "Video & Calls", icon: Video },
  { id: "matching", label: "Matching", icon: Heart },
  { id: "chat", label: "Chat & Gifting", icon: MessageCircle },
  { id: "monetization", label: "Monetization", icon: DollarSign },
  { id: "safety", label: "Safety & Privacy", icon: Shield },
];

const features = [
  {
    id: "video-profile", category: "video",
    icon: UserCircle2, title: "Video Profile",
    desc: "Users can upload personal video profiles, allowing them to showcase their personality more effectively and build stronger, more authentic connections.",
    screen: { emoji: "🎥", label: "Video Profile", bg: "from-pink-900/80 to-rose-900/80", image: videoProfileImg },
  },
  {
    id: "video-dating", category: "video",
    icon: Calendar, title: "Video Dating",
    desc: "The app enables scheduling dates directly within the platform, with options for in-person meetups, audio calls, or video calls.",
    screen: { emoji: "📅", label: "Schedule a Date", bg: "from-violet-900/80 to-purple-900/80", image: videoDateImg },
  },
  {
    id: "av-calls", category: "video",
    icon: Phone, title: "Audio/Video Calls",
    desc: "Users can engage in high-quality audio and video calls with matches, with the option to extend call duration using in-app coins.",
    screen: { emoji: "📞", label: "HD Call", bg: "from-blue-900/80 to-cyan-900/80", image: audioVideoCallImg },
  },
  {
    id: "call-extension", category: "video",
    icon: Clock, title: "Call Extension",
    desc: "The first 30 seconds of a call are free. Users can extend the call duration by spending coins, giving flexibility while boosting platform engagement.",
    screen: { emoji: "⏱️", label: "Extend Call", bg: "from-sky-900/80 to-indigo-900/80" },
  },
  {
    id: "random-calling", category: "video",
    icon: Shuffle, title: "Random Calling",
    desc: "The platform allows instant connections with random people through live video or audio calls, creating a more spontaneous and engaging experience.",
    screen: { emoji: "🎲", label: "Random Connect", bg: "from-emerald-900/80 to-teal-900/80", image: randomCallingImg },
  },
  {
    id: "speed-dating", category: "video",
    icon: Zap, title: "Speed Dating",
    desc: "Users can participate in speed dating sessions, connecting with multiple matches through short, timed video calls for quick and meaningful interactions.",
    screen: { emoji: "⚡", label: "Speed Date", bg: "from-yellow-900/80 to-amber-900/80", image: speedDatingImg },
  },
  {
    id: "ar-filters", category: "video",
    icon: Sparkles, title: "AR Filters & Masks",
    desc: "Enhance video conversations with interactive AR filters and masks, making interactions more expressive, fun, and engaging.",
    screen: { emoji: "✨", label: "AR Filters", bg: "from-fuchsia-900/80 to-pink-900/80", image: arFiltersImg },
  },
  {
    id: "match-feed", category: "matching",
    icon: Heart, title: "Match Feed",
    desc: "A swipe-based match feed allows users to explore profiles, like or skip, and discover potential connections effortlessly.",
    screen: { emoji: "💘", label: "Match Feed", bg: "from-rose-900/80 to-red-900/80", image: matchFeedImg },
  },
  {
    id: "like-profile", category: "matching",
    icon: ThumbsUp, title: "Like Profile",
    desc: "Profiles in the white label dating app can be liked or super liked to express interest and improve the chances of matching.",
    screen: { emoji: "❤️", label: "Super Like!", bg: "from-pink-900/80 to-fuchsia-900/80", image: likeProfileImg },
  },
  {
    id: "boost-profile", category: "matching",
    icon: Rocket, title: "Boost Profile",
    desc: "Users can boost their profiles to increase visibility and reach, helping them attract more matches within the white label dating app.",
    screen: { emoji: "🚀", label: "Boost Active", bg: "from-indigo-900/80 to-blue-900/80", image: boostProfileImg },
  },
  {
    id: "advanced-filters", category: "matching",
    icon: Filter, title: "Advanced Filters",
    desc: "During signup, users answer simple questions which are then used for advanced filtering. This ensures better matching based on preferences and compatibility.",
    screen: { emoji: "🎯", label: "Advanced Filters", bg: "from-indigo-900/80 to-blue-900/80" },
  },
  {
    id: "couple-profile", category: "matching",
    icon: Users, title: "Couple Profile",
    desc: "The platform allows couples to create a joint profile. They can connect with singles or other couples, adding diversity to user interactions.",
    screen: { emoji: "👫", label: "Couple Profile", bg: "from-purple-900/80 to-pink-900/80" },
  },
  {
    id: "in-app-chat", category: "chat",
    icon: Inbox, title: "In-App Chat",
    desc: "In-app messaging enables seamless text conversations, helping users stay connected and build relationships beyond calls.",
    screen: { emoji: "💌", label: "New Message", bg: "from-teal-900/80 to-cyan-900/80", image: inAppChatImg },
  },
  {
    id: "paid-chat", category: "chat",
    icon: MessageCircle, title: "Paid Chat",
    desc: "The platform enables messaging profiles without a match through paid chat, increasing opportunities to connect.",
    screen: { emoji: "💬", label: "Message Now", bg: "from-green-900/80 to-emerald-900/80", image: paidChatImg },
  },
  {
    id: "gifts-coins", category: "chat",
    icon: Gift, title: "Send Gifts and Coins",
    desc: "The app allows sending virtual gifts and coins along with personalized messages, making conversations more interactive and rewarding.",
    screen: { emoji: "🎁", label: "Send Gift", bg: "from-orange-900/80 to-amber-900/80", image: sendCoinsImg },
  },
  {
    id: "social-feed", category: "chat",
    icon: Radio, title: "Social Feed",
    desc: "The social feed lets users follow others and view posts in a full-screen format, similar to social media. This feature adds engagement beyond swiping and matching.",
    screen: { emoji: "📱", label: "Social Feed", bg: "from-rose-900/80 to-violet-900/80" },
  },
  {
    id: "subscription", category: "monetization",
    icon: Crown, title: "Subscription",
    desc: "Premium subscription plans unlock advanced filters, exclusive features, and enhanced matchmaking options.",
    screen: { emoji: "👑", label: "Go Premium", bg: "from-yellow-900/80 to-orange-900/80", image: subscriptionImg },
  },
  {
    id: "coins-wallet", category: "monetization",
    icon: Coins, title: "Coins & Wallet",
    desc: "A built-in wallet allows users to purchase and manage coins, which can be used for calls, gifts, messaging, and other premium features.",
    screen: { emoji: "💰", label: "Wallet: 500🪙", bg: "from-amber-900/80 to-yellow-900/80", image: coinWalletImg },
  },
  {
    id: "face-verification", category: "safety",
    icon: ScanFace, title: "Face Verification",
    desc: "Profiles can be verified through face verification, ensuring authenticity and helping reduce fake accounts across the white label dating app.",
    screen: { emoji: "🔍", label: "Verified ✓", bg: "from-cyan-900/80 to-sky-900/80", image: faceVerificationImg },
  },
  {
    id: "anonymity", category: "safety",
    icon: EyeOff, title: "Anonymity Options",
    desc: "Privacy controls such as video blur and anonymous mode allow users to interact comfortably while maintaining control over their identity.",
    screen: { emoji: "🕵️", label: "Anonymous Mode", bg: "from-slate-900/80 to-gray-900/80", image: anonymityImg },
  },
  {
    id: "login-options", category: "safety",
    icon: KeyRound, title: "Login Options",
    desc: "Users can register or log in through multiple options such as Facebook, email, or phone number, making onboarding quick and convenient.",
    screen: { emoji: "🔐", label: "Secure Login", bg: "from-emerald-900/80 to-teal-900/80" },
  },
];

const PlatformFeatures = () => {
  const [activeCategory, setActiveCategory] = useState("video");
  const [activeFeatureId, setActiveFeatureId] = useState("video-profile");

  const filtered = features.filter((f) => f.category === activeCategory);
  const activeFeature = features.find((f) => f.id === activeFeatureId) ?? filtered[0];

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    const first = features.find((f) => f.category === catId);
    if (first) setActiveFeatureId(first.id);
  };

  return (
    <section className="py-14 lg:py-16 bg-background" id="features">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Complete Feature Set</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 mb-5">
            All the Must-Have Features in Our{" "}
            <span className="gradient-text">White Label Dating App</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Seamless swiping, real-time matches, secure chats, and AI-powered insights—all in one powerful platform.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200
                ${activeCategory === cat.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "border-border text-muted-foreground bg-card hover:border-primary/40 hover:text-foreground"
                }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content: Feature cards + Phone mockup */}
        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto items-start">

          {/* Feature cards */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.22 }}
                className="grid grid-cols-1 gap-3"
              >
                {filtered.map((feature, i) => (
                  <motion.button
                    key={feature.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => setActiveFeatureId(feature.id)}
                    className={`group text-left flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 w-full
                      ${activeFeatureId === feature.id
                        ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-border bg-card hover:border-primary/30 hover:bg-card/80"
                      }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center transition-colors
                      ${activeFeatureId === feature.id ? "bg-primary/20" : "bg-muted"}`}>
                      <feature.icon className={`w-5 h-5 ${activeFeatureId === feature.id ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <div>
                      <p className={`font-bold text-sm mb-1 ${activeFeatureId === feature.id ? "text-primary" : "text-foreground"}`}>
                        {feature.title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sticky Phone mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:sticky lg:top-24">
            <div className="flex flex-col items-center gap-6">
              {activeFeature.screen.image ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeatureId}
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="w-full max-w-[360px]"
                  >
                    <img
                      src={activeFeature.screen.image}
                      alt={activeFeature.title}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="relative w-64 h-[520px]">
                  <div className="absolute inset-0 rounded-[3rem] border-[6px] border-foreground/10 bg-card shadow-2xl overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/10 rounded-b-2xl z-10" />

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeatureId}
                        initial={{ opacity: 0, scale: 0.95, y: 12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className={`absolute inset-0 bg-gradient-to-br ${activeFeature.screen.bg} p-6 flex flex-col items-center justify-center gap-4`}
                      >
                        {/* Status bar */}
                        <div className="absolute top-8 left-0 right-0 flex justify-between px-6 text-[10px] text-foreground/40">
                          <span>9:41</span>
                          <span>●●●</span>
                        </div>
                        <div className="text-7xl select-none">{activeFeature.screen.emoji}</div>
                        <div className="text-center">
                          <p className="text-foreground font-bold text-base">{activeFeature.title}</p>
                          <p className="text-xs font-semibold mt-1 text-primary">{activeFeature.screen.label}</p>
                        </div>

                        <div className="w-full space-y-2 mt-2">
                          <div className="h-2 rounded-full bg-foreground/10 w-3/4 mx-auto" />
                          <div className="h-2 rounded-full bg-foreground/10 w-1/2 mx-auto" />
                          <div className="h-2 rounded-full bg-foreground/10 w-2/3 mx-auto" />
                        </div>

                        <div className="mt-2 px-6 py-2 rounded-full bg-primary/80 text-primary-foreground text-xs font-bold">
                          {activeFeature.screen.label}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Glow */}
                  <div className="absolute inset-0 rounded-[3rem] glow-primary opacity-30 pointer-events-none" />
                </div>
              )}

              {/* Active feature label below phone */}
              {!activeFeature.screen.image && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeatureId}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5"
                  >
                    <activeFeature.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">{activeFeature.title}</span>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlatformFeatures;
