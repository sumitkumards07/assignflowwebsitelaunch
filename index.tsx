import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  CheckCircle2,
  Clock,
  BrainCircuit,
  BarChart3,
  FileText,
  Download,
  ChevronRight,
  Star,
  Smartphone,
  Upload,
  Zap,
  ListTodo,
  CalendarDays,
  User,
  Send,
  HelpCircle,
  Plus
} from 'lucide-react';

const AppLogo = () => (
  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 transform transition-transform hover:scale-105 overflow-hidden">
    <img src="/logo.png" alt="Assign Flow Logo" className="w-full h-full object-contain p-1" />
  </div>
);

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic Slide Duration Logic
  useEffect(() => {
    // Pattern: 1.2s (Short), 2.5s (Long), 1.2s (Short), 2.5s (Long)
    // Using slightly > 1s for better UX, but keeping the requested rhythm
    const durations = [1200, 2500, 1200, 2500];

    const timer = setTimeout(() => {
      setActiveScreen((prev) => (prev + 1) % 4);
    }, durations[activeScreen]);

    return () => clearTimeout(timer);
  }, [activeScreen]);

  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getActiveNavColor = (screenIndex) => {
    return activeScreen === screenIndex ? 'text-brand-orange' : 'text-gray-500';
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-orange selection:text-white overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <AppLogo />
            <span className="text-xl font-bold tracking-tight">Assign Flow</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-text">
            <a href="#features" className="hover:text-brand-orange transition-colors">Features</a>
            <a href="#ai-quiz" className="hover:text-brand-orange transition-colors">AI Quiz</a>
            <a href="#faq" className="hover:text-brand-orange transition-colors">FAQ</a>
          </div>
          <a
            href="/app-release.apk"
            download
            className="bg-white text-brand-dark px-5 py-2 rounded-full font-semibold text-sm hover:bg-brand-orange hover:text-white transition-all duration-300"
          >
            Download App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-orange text-sm font-medium animate-fade-in-up">
              <Zap size={14} fill="currentColor" />
              <span>v1.0 Now Available on Android</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Focus better.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">
                Study smarter.
              </span>
            </h1>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The all-in-one productivity app that combines a Pomodoro timer, task manager, and an AI tutor that turns your PDF notes into quizzes instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/app-release.apk" download className="flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20">
                <Download size={20} />
                Download APK
              </a>
              <a href="#features" className="flex items-center justify-center gap-3 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all">
                <Smartphone size={20} />
                View Features
              </a>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-brand-muted text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-orange" />
                <span>Free to use</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-orange" />
                <span>No ads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-orange" />
                <span>Works offline</span>
              </div>
            </div>
          </div>

          {/* CSS Phone Mockup */}
          <div className="relative mx-auto lg:mr-0 flex flex-col items-center">

            <div className="mb-4 text-center">
              <span className="text-sm font-medium text-brand-muted uppercase tracking-widest">A quick look inside the app</span>
              <div className="w-12 h-1 bg-brand-orange/50 mx-auto mt-2 rounded-full"></div>
            </div>

            <div className="relative w-[320px] h-[650px] bg-[#121212] rounded-[40px] border-[8px] border-[#2a2a2a] shadow-2xl overflow-hidden ring-1 ring-white/10">
              {/* Phone Status Bar */}
              <div className="absolute top-0 w-full h-8 px-6 flex justify-between items-center z-20 text-[10px] text-white/80 font-medium bg-[#1c1c1e]">
                <span>12:42</span>
                <div className="flex gap-1">
                  <i className="fa-solid fa-wifi text-[10px]"></i>
                  <i className="fa-solid fa-battery-full text-[10px]"></i>
                </div>
              </div>

              {/* Dynamic Island / Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

              {/* App Content Container */}
              <div className="relative h-full w-full bg-[#1c1c1e] font-sans">

                {/* ---------------- SCREEN 0: TIMER ---------------- */}
                <div className={`absolute inset-0 pt-16 flex flex-col p-6 transition-opacity duration-500 ${activeScreen === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  {/* Header */}
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-xl font-semibold">Focus Session</span>
                    <div className="px-3 py-1 bg-white/10 rounded-full text-xs flex items-center gap-1">
                      <i className="fa-solid fa-gear"></i> Set Timer
                    </div>
                  </div>

                  {/* Dropdown Card */}
                  <div className="w-full bg-[#2c2c2e] p-4 rounded-2xl mb-8 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📚</span>
                      <div className="text-left">
                        <div className="text-sm font-medium text-white">Physics Study</div>
                        <div className="text-[10px] text-gray-400">Chapter 5 - Force</div>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-gray-400 rotate-90" />
                  </div>

                  {/* Timer Ring */}
                  <div className="relative w-64 h-64 mx-auto mb-8 flex items-center justify-center scale-90">
                    <div className="absolute inset-0 rounded-full bg-brand-orange/20 blur-xl"></div>
                    <div className="absolute inset-0 rounded-full border-[6px] border-[#2c2c2e]"></div>
                    <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
                      <circle
                        cx="128"
                        cy="128"
                        r="125"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-brand-orange drop-shadow-[0_0_10px_rgba(255,87,34,0.5)]"
                        strokeDasharray="785"
                        strokeDashoffset="200"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="text-center z-10">
                      <div className="text-6xl font-bold tracking-tighter mb-2">24:59</div>
                      <div className="text-sm text-brand-muted uppercase tracking-widest">Focusing</div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex justify-center items-center gap-8 mb-auto">
                    <button className="w-14 h-14 rounded-2xl bg-[#2c2c2e] flex items-center justify-center">
                      <i className="fa-solid fa-rotate-left text-white"></i>
                    </button>
                    <button className="w-20 h-20 rounded-[28px] bg-brand-orange flex items-center justify-center shadow-lg shadow-brand-orange/30">
                      <i className="fa-solid fa-pause text-2xl text-white"></i>
                    </button>
                  </div>
                </div>

                {/* ---------------- SCREEN 1: AI CHAT ---------------- */}
                <div className={`absolute inset-0 pt-16 flex flex-col transition-opacity duration-500 ${activeScreen === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  {/* Header */}
                  <div className="px-6 pb-4 border-b border-white/5 flex justify-between items-center bg-[#1c1c1e]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                        <BrainCircuit size={16} className="text-white" />
                      </div>
                      <span className="text-lg font-semibold">AI Quiz Chat</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <User size={16} />
                    </div>
                  </div>

                  {/* Chat Body */}
                  <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#1c1c1e] to-transparent z-10"></div>

                    {/* User Msg */}
                    <div className="flex justify-end mt-4">
                      <div className="bg-[#2c2c2e] p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm">
                        <div className="flex items-center gap-2 mb-2 bg-black/20 p-2 rounded border border-white/5">
                          <FileText size={12} className="text-red-400" />
                          <span className="text-xs truncate">Biology_Ch3.pdf</span>
                        </div>
                        Create a quiz on photosynthesis.
                      </div>
                    </div>

                    {/* AI Msg */}
                    <div className="flex justify-start">
                      <div className="bg-purple-900/20 border border-purple-500/20 p-3 rounded-2xl rounded-tl-sm max-w-[90%] text-sm">
                        <p className="mb-2 font-semibold text-purple-200">Quiz Generated!</p>
                        <p className="mb-2">1. What is the primary pigment?</p>
                        <div className="space-y-1.5">
                          <div className="px-3 py-2 bg-white/5 rounded border border-white/10 text-xs">A. Chlorophyll</div>
                          <div className="px-3 py-2 bg-white/5 rounded border border-white/10 text-xs">B. Carotenoids</div>
                        </div>
                      </div>
                    </div>

                    {/* User Msg 2 */}
                    <div className="flex justify-end">
                      <div className="bg-[#2c2c2e] p-3 rounded-2xl rounded-tr-sm max-w-[85%] text-sm">
                        Explain difference between mitosis and meiosis.
                      </div>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 mb-20">
                    <div className="h-12 bg-[#2c2c2e] rounded-full flex items-center px-4 justify-between border border-white/5">
                      <span className="text-gray-500 text-sm">Ask anything...</span>
                      <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center">
                        <Send size={14} className="text-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ---------------- SCREEN 2: TASKS ---------------- */}
                <div className={`absolute inset-0 pt-16 flex flex-col p-6 transition-opacity duration-500 ${activeScreen === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  {/* Header */}
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <div className="text-sm text-brand-orange font-bold uppercase tracking-wider">December 2025</div>
                      <div className="text-2xl font-bold">Monday, 1st</div>
                    </div>
                    <div className="text-xs text-gray-400">4/4 Done</div>
                  </div>

                  {/* Calendar Row */}
                  <div className="flex justify-between mb-8 pb-4 border-b border-white/5">
                    {['M', 'T', 'W', 'T', 'F'].map((d, i) => (
                      <div key={i} className={`flex flex-col items-center gap-1 ${i === 0 ? 'opacity-100' : 'opacity-40'}`}>
                        <span className="text-[10px]">{d}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i === 0 ? 'bg-brand-orange text-white' : 'bg-transparent'}`}>
                          {i + 1}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tasks List */}
                  <div className="space-y-4">
                    {/* Task 1 */}
                    <div className="flex gap-4 items-start">
                      <div className="pt-1 text-xs text-gray-500 w-10">08:00</div>
                      <div className="flex-1 pb-4 border-l-2 border-brand-orange pl-4 relative">
                        <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-brand-orange"></div>
                        <h4 className="font-semibold text-sm">History Exam Prep</h4>
                        <p className="text-xs text-gray-500 mt-1">Chapter 4-6 Revision</p>
                      </div>
                      <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-brand-orange opacity-0" />
                      </div>
                    </div>

                    {/* Task 2 */}
                    <div className="flex gap-4 items-start opacity-50">
                      <div className="pt-1 text-xs text-gray-500 w-10">09:30</div>
                      <div className="flex-1 pb-4 border-l-2 border-gray-700 pl-4 relative">
                        <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-700"></div>
                        <h4 className="font-semibold text-sm line-through">Group Project</h4>
                        <p className="text-xs text-gray-500 mt-1 line-through">Library Meeting Room</p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-brand-orange border-none flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-white" />
                      </div>
                    </div>

                    {/* Task 3 */}
                    <div className="flex gap-4 items-start opacity-50">
                      <div className="pt-1 text-xs text-gray-500 w-10">11:00</div>
                      <div className="flex-1 pb-4 border-l-2 border-gray-700 pl-4 relative">
                        <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-gray-700"></div>
                        <h4 className="font-semibold text-sm line-through">Biology Lab</h4>
                        <p className="text-xs text-gray-500 mt-1 line-through">Submit Report</p>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-brand-orange border-none flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ---------------- SCREEN 3: ANALYTICS ---------------- */}
                <div className={`absolute inset-0 pt-16 flex flex-col p-6 transition-opacity duration-500 ${activeScreen === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  {/* Header */}
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-xl font-semibold">Report</span>
                    <CalendarDays size={20} className="text-white" />
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="bg-[#2c2c2e] p-3 rounded-2xl">
                      <div className="text-2xl font-bold text-brand-orange">84.5</div>
                      <div className="text-[10px] text-gray-400">Total Hours</div>
                    </div>
                    <div className="bg-[#2c2c2e] p-3 rounded-2xl">
                      <div className="text-2xl font-bold text-white">15.2</div>
                      <div className="text-[10px] text-gray-400">This Week</div>
                    </div>
                  </div>

                  {/* Chart Title */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold">Focus Time Chart</h4>
                    <div className="flex gap-4 text-[10px] text-gray-500 mt-1">
                      <span>Top: 5h</span>
                      <span>Avg: 3.5h</span>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="h-40 flex items-end justify-between gap-2 mb-8 px-1">
                    {[40, 65, 30, 85, 50, 95, 60].map((h, i) => (
                      <div key={i} className="w-full flex flex-col items-center gap-1 group">
                        <div className="text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">{Math.floor(h / 10)}h</div>
                        <div
                          className={`w-full rounded-t-sm transition-all duration-1000 ${i === 3 ? 'bg-brand-orange' : 'bg-brand-orange/40'}`}
                          style={{ height: `${activeScreen === 3 ? h : 0}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>

                  {/* Subject Breakdown */}
                  <div className="bg-[#2c2c2e] p-4 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold">Most Focused: Physics</span>
                      <span className="text-xs text-brand-orange">45%</span>
                    </div>
                    <div className="w-full bg-black/30 h-2 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-orange w-[45%]"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Nav (Shared across screens) */}
                <div className="absolute bottom-6 left-6 right-6 h-16 bg-[#121212] rounded-full flex justify-between items-center px-6 border border-white/5 z-50">
                  <ListTodo size={20} className={`transition-colors duration-300 ${getActiveNavColor(2)}`} />
                  <Clock size={20} className={`transition-colors duration-300 ${getActiveNavColor(0)}`} />

                  <div className="w-10 h-10 -mt-8 rounded-full bg-white flex items-center justify-center text-black font-bold shadow-lg shadow-white/20 transform transition-transform hover:scale-110 cursor-pointer">
                    <Plus size={20} />
                  </div>

                  <BrainCircuit size={20} className={`transition-colors duration-300 ${getActiveNavColor(1)}`} />
                  <BarChart3 size={20} className={`transition-colors duration-300 ${getActiveNavColor(3)}`} />
                </div>

                {/* Active Indicator Dot below Nav items */}
                <div className="absolute bottom-6 left-6 right-6 h-16 pointer-events-none flex justify-between items-end px-6 pb-2">
                  <div className={`w-1 h-1 rounded-full bg-brand-orange transition-opacity duration-300 mx-auto translate-x-[2px] ${activeScreen === 2 ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className={`w-1 h-1 rounded-full bg-brand-orange transition-opacity duration-300 mx-auto translate-x-[2px] ${activeScreen === 0 ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className="w-10"></div> {/* Spacer for + button */}
                  <div className={`w-1 h-1 rounded-full bg-brand-orange transition-opacity duration-300 mx-auto -translate-x-[2px] ${activeScreen === 1 ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className={`w-1 h-1 rounded-full bg-brand-orange transition-opacity duration-300 mx-auto -translate-x-[2px] ${activeScreen === 3 ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>

              </div>
            </div>

            {/* Decoration Dots */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-brand-orange/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-[#0F0F0F]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Everything you need to <span className="text-brand-orange">excel</span></h2>
            <p className="text-brand-muted max-w-2xl mx-auto">Stop juggling multiple apps. Assign Flow brings your tasks, study timer, and study materials together.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-8 rounded-3xl hover:bg-white/5 transition-all group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <Clock className="text-brand-orange" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Pomodoro Focus</h3>
              <p className="text-brand-muted leading-relaxed">
                Customizable focus sessions with beautiful visuals. Track your deep work hours and take structured breaks to avoid burnout.
              </p>
            </div>

            {/* Feature 2 (Main Highlight) */}
            <div className="glass-card p-8 rounded-3xl border-brand-orange/30 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3">
                <span className="text-[10px] font-bold bg-brand-orange text-white px-2 py-1 rounded">AI POWERED</span>
              </div>
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <BrainCircuit className="text-purple-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">PDF to Quiz Chat</h3>
              <p className="text-brand-muted leading-relaxed">
                Upload your study material or textbooks. Our AI analyzes the content and generates practice quizzes instantly to test your knowledge.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card p-8 rounded-3xl hover:bg-white/5 transition-all group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <CheckCircle2 className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Task Lists</h3>
              <p className="text-brand-muted leading-relaxed">
                Organize assignments and daily to-dos. View them in a calendar timeline to visualize your workload for the week.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-card p-8 rounded-3xl hover:bg-white/5 transition-all group">
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <BarChart3 className="text-green-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Detailed Analytics</h3>
              <p className="text-brand-muted leading-relaxed">
                Visualize your productivity trends. See which subjects you focus on the most and find your peak productivity hours.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="glass-card p-8 rounded-3xl hover:bg-white/5 transition-all group">
              <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
                <FileText className="text-pink-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Assignment Tracking</h3>
              <p className="text-brand-muted leading-relaxed">
                Never miss a deadline. Keep track of all your upcoming essays, projects, and lab reports in one dedicated view.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="glass-card p-8 rounded-3xl hover:bg-white/5 transition-all group">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                <Star className="text-yellow-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Gamified Progress</h3>
              <p className="text-brand-muted leading-relaxed">
                Earn tomatoes (Pomodoros) for every focused session. build your streak and stay motivated to study every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Feature Deep Dive */}
      <section id="ai-quiz" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-[#1a1a1a] rounded-[40px] border border-white/5 p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-purple-400 text-xs font-bold uppercase tracking-wider mb-6 border border-purple-500/20 bg-purple-500/5">
                  AI Quiz Generator
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">Turn your notes into <br />quizzes instantly.</h2>
                <p className="text-brand-muted text-lg mb-8">
                  Don't just read your notes—test yourself on them. Upload any PDF (textbook chapter, lecture slides) and Assign Flow's AI will generate multiple-choice questions to help you study.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">1</div>
                    <span className="text-lg">Upload PDF Document</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">2</div>
                    <span className="text-lg">AI Summarizes Key Points</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">3</div>
                    <span className="text-lg">Take generated Quiz & Review</span>
                  </li>
                </ul>
              </div>

              {/* Chat UI Mockup */}
              <div className="bg-[#0A0A0A] rounded-3xl p-6 border border-white/5 shadow-2xl max-w-md mx-auto w-full">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                      <BrainCircuit size={16} className="text-white" />
                    </div>
                    <span className="font-semibold">AI Tutor</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-end">
                    <div className="bg-[#2c2c2e] px-4 py-3 rounded-2xl rounded-tr-sm text-gray-200 max-w-[85%]">
                      <div className="flex items-center gap-2 mb-2 bg-black/20 p-2 rounded">
                        <FileText size={14} className="text-red-400" />
                        <span className="text-xs truncate">Biology_Ch3_Cell_Structure.pdf</span>
                      </div>
                      Create a quiz on photosynthesis from this PDF.
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-purple-900/20 border border-purple-500/20 px-4 py-3 rounded-2xl rounded-tl-sm text-gray-200 max-w-[90%]">
                      <p className="mb-3">Quiz generated! Here is your first question:</p>
                      <p className="font-bold mb-2">What is the primary pigment involved in photosynthesis?</p>
                      <div className="space-y-2">
                        <div className="p-2 rounded bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition">A. Chlorophyll</div>
                        <div className="p-2 rounded bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition">B. Carotenoids</div>
                        <div className="p-2 rounded bg-white/5 border border-white/10 hover:bg-white/10 cursor-pointer transition">C. Anthocyanin</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="h-10 bg-[#1e1e1e] rounded-full flex items-center px-4 text-gray-500 text-sm">
                    Ask anything or upload PDF...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-24 bg-[#0F0F0F]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-16">Visualize your <span className="text-brand-orange">Progress</span></h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Chart Mockup 1 */}
            <div className="glass-card p-6 rounded-3xl text-left border border-white/5">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">Total Focus Time</h4>
                  <div className="text-4xl font-bold text-brand-orange">84.5h</div>
                </div>
                <div className="text-sm text-green-400 bg-green-400/10 px-2 py-1 rounded">+12% vs last week</div>
              </div>
              <div className="h-40 flex items-end gap-2 justify-between">
                {[40, 65, 30, 85, 50, 95, 60].map((h, i) => (
                  <div key={i} className="w-full bg-[#2c2c2e] rounded-t-lg relative group">
                    <div
                      className="absolute bottom-0 w-full bg-brand-orange rounded-t-lg transition-all duration-500 group-hover:bg-orange-400"
                      style={{ height: `${h}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs text-gray-500">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>

            {/* Chart Mockup 2 */}
            <div className="glass-card p-6 rounded-3xl text-left border border-white/5 flex flex-col justify-center">
              <h4 className="text-gray-400 text-sm mb-6">Subject Distribution</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Physics</span>
                    <span>45%</span>
                  </div>
                  <div className="h-2 bg-[#2c2c2e] rounded-full overflow-hidden">
                    <div className="h-full w-[45%] bg-brand-orange rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Biology</span>
                    <span>30%</span>
                  </div>
                  <div className="h-2 bg-[#2c2c2e] rounded-full overflow-hidden">
                    <div className="h-full w-[30%] bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Literature</span>
                    <span>15%</span>
                  </div>
                  <div className="h-2 bg-[#2c2c2e] rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-purple-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>History</span>
                    <span>10%</span>
                  </div>
                  <div className="h-2 bg-[#2c2c2e] rounded-full overflow-hidden">
                    <div className="h-full w-[10%] bg-gray-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#0A0A0A] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-brand-muted">A few quick answers while you’re scrolling. You can tweak this copy based on your actual app policies.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Is Assign Flow free?</h3>
                <p className="text-brand-muted leading-relaxed">Yes. During the beta, the app is completely free. Later we may introduce a pro plan with extra analytics and customisation.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Do you store my PDFs or quizzes?</h3>
                <p className="text-brand-muted leading-relaxed">Your notes are used only to generate quizzes and summaries for you. Assign Flow prioritizes your privacy.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">What devices are supported?</h3>
                <p className="text-brand-muted leading-relaxed">Currently Assign Flow is available for Android phones. iOS and web versions are planned for the near future.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Can I use it for non-study tasks?</h3>
                <p className="text-brand-muted leading-relaxed">Of course. You can create projects for work, personal life, or anything else you want to track and focus on.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-brand-orange to-red-600 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">Ready to boost your grades?</h2>
              <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
                Join thousands of students using Assign Flow to organize their academic life.
              </p>
              <div className="flex justify-center">
                <a href="/app-release.apk" download className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-4 hover:bg-gray-900 transition shadow-2xl hover:-translate-y-1 transform border border-white/10 group">
                  <div className="bg-white/10 p-3 rounded-full group-hover:bg-brand-orange transition-colors duration-300">
                    <Download size={32} className="text-white" />
                  </div>
                  <div className="text-left leading-tight">
                    <div className="text-xs font-medium uppercase text-gray-400 tracking-wider mb-0.5">Direct Download</div>
                    <div>Download .APK</div>
                  </div>
                </a>
              </div>
              <p className="mt-8 text-white/60 text-sm font-medium bg-black/20 inline-block px-4 py-2 rounded-full backdrop-blur-sm border border-white/5">
                <span className="w-2 h-2 bg-green-400 rounded-full inline-block mr-2"></span>
                Requires Android 8.0+
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <AppLogo />
              <span className="text-xl font-bold">Assign Flow</span>
            </div>
            <div className="text-brand-muted text-sm flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="#" className="hover:text-white transition">Support</a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition text-brand-muted">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition text-brand-muted">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition text-brand-muted">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="text-center text-brand-muted/40 text-xs mt-12">
            © 2024 Assign Flow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);