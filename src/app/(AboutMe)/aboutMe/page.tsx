'use client'
import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';

interface AboutMeObject {
    name: string;
    id: string;
    description: string;
    subjectTitle: string;
    skills: string;
    achievements: string;
    goals: string;
    passion: string;
    images: string;
    icons: string;
    associatedInstagram: string;
    associatedTiktok: string;
    associatedLinkedIn: string;
    associatedYoutube: string;
    associatedTwitch: string;
}

// Sample data - you can replace with your actual data
const sampleAboutMeData: AboutMeObject[] = [
    {
        name: "Software Development",
        id: "software-dev",
        description: "Passionate about creating innovative software solutions that solve real-world problems. Specializing in full-stack development with modern technologies.",
        subjectTitle: "Full-Stack Developer",
        skills: "React, Node.js, TypeScript, Python, AWS, Docker",
        achievements: "Built 10+ web applications, Led team of 5 developers, Published 3 open-source packages",
        goals: "Master cloud architecture, Contribute to major open-source projects, Build AI-powered applications",
        passion: "Creating elegant code solutions and mentoring junior developers",
        images: "/engineering-svgrepo-com.svg",
        icons: "💻",
        associatedInstagram: "https://instagram.com/yourdevaccount",
        associatedTiktok: "https://tiktok.com/@yourdevaccount",
        associatedLinkedIn: "https://linkedin.com/in/yourdevaccount",
        associatedYoutube: "https://youtube.com/@yourdevaccount",
        associatedTwitch: "https://twitch.tv/yourdevaccount"
    },
    {
        name: "Digital Art & Design",
        id: "digital-art",
        description: "Expressing creativity through digital mediums, creating stunning visual experiences and innovative designs.",
        subjectTitle: "Digital Artist",
        skills: "Photoshop, Illustrator, Procreate, 3D Modeling, Animation",
        achievements: "Featured in 5 art exhibitions, Sold 50+ digital artworks, Won 3 design competitions",
        goals: "Launch NFT collection, Create animated short film, Establish design studio",
        passion: "Blending traditional art techniques with cutting-edge digital tools",
        images: "/art-palette-svgrepo-com.svg",
        icons: "🎨",
        associatedInstagram: "https://instagram.com/yourartaccount",
        associatedTiktok: "https://tiktok.com/@yourartaccount",
        associatedLinkedIn: "https://linkedin.com/in/yourartaccount",
        associatedYoutube: "https://youtube.com/@yourartaccount",
        associatedTwitch: "https://twitch.tv/yourartaccount"
    },
    {
        name: "Sports & Athletics",
        id: "sports",
        description: "Dedicated athlete with a passion for multiple sports, focusing on teamwork, discipline, and continuous improvement.",
        subjectTitle: "Multi-Sport Athlete",
        skills: "Basketball, Soccer, Tennis, Swimming, Strength Training",
        achievements: "Varsity team captain, Regional champion, MVP awards, Academic athlete recognition",
        goals: "Compete at collegiate level, Improve personal records, Mentor young athletes",
        passion: "Pushing physical limits and inspiring others through sports excellence",
        images: "/sports-svgrepo-com.svg",
        icons: "🏀",
        associatedInstagram: "https://instagram.com/yoursportsaccount",
        associatedTiktok: "https://tiktok.com/@yoursportsaccount",
        associatedLinkedIn: "https://linkedin.com/in/yoursportsaccount",
        associatedYoutube: "https://youtube.com/@yoursportsaccount",
        associatedTwitch: "https://twitch.tv/yoursportsaccount"
    },
    {
        name: "Photography & Videography",
        id: "photography",
        description: "Capturing life's moments through the lens, creating compelling visual stories and cinematic experiences.",
        subjectTitle: "Visual Storyteller",
        skills: "DSLR Photography, Video Editing, Drone Operation, Color Grading, Storytelling",
        achievements: "Published in 3 magazines, 100K+ social media followers, Award-winning short film",
        goals: "Direct feature film, Travel photography book, Documentary series",
        passion: "Telling stories that inspire and connect people across cultures",
        images: "/camera-svgrepo-com.svg",
        icons: "📸",
        associatedInstagram: "https://instagram.com/yourphotoaccount",
        associatedTiktok: "https://tiktok.com/@yourphotoaccount",
        associatedLinkedIn: "https://linkedin.com/in/yourphotoaccount",
        associatedYoutube: "https://youtube.com/@yourphotoaccount",
        associatedTwitch: "https://twitch.tv/yourphotoaccount"
    }
];

function AboutMeCard({ item }: { item: AboutMeObject }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700">
            {/* Header with Image */}
            <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4 text-4xl">{item.icons}</div>
                <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{item.subjectTitle}</h3>
                    <p className="text-white/90 text-sm">{item.name}</p>
                </div>
                {item.images && (
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Image
                            src={item.images}
                            alt={item.name}
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="mb-4">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {isExpanded ? item.description : `${item.description.substring(0, 100)}...`}
                    </p>
                    {!isExpanded && (
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                        >
                            Read more
                        </button>
                    )}
                </div>

                {/* Skills */}
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                        {item.skills.split(', ').map((skill, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                            >
                                {skill.trim()}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Achievements</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.achievements}
                    </p>
                </div>

                {/* Goals */}
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Goals</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.goals}
                    </p>
                </div>

                {/* Passion */}
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Passion</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                        "{item.passion}"
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Connect</h4>
                    <div className="flex space-x-3">
                        {item.associatedInstagram && (
                            <Link href={item.associatedInstagram} target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </Link>
                        )}
                        {item.associatedTiktok && (
                            <Link href={item.associatedTiktok} target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                                </svg>
                            </Link>
                        )}
                        {item.associatedLinkedIn && (
                            <Link href={item.associatedLinkedIn} target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </Link>
                        )}
                        {item.associatedYoutube && (
                            <Link href={item.associatedYoutube} target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </Link>
                        )}
                        {item.associatedTwitch && (
                            <Link href={item.associatedTwitch} target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                                </svg>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function AddItemModal({ isOpen, onClose, onAdd }: { isOpen: boolean; onClose: () => void; onAdd: (item: AboutMeObject) => void }) {
    const [formData, setFormData] = useState<AboutMeObject>({
        name: '',
        id: '',
        description: '',
        subjectTitle: '',
        skills: '',
        achievements: '',
        goals: '',
        passion: '',
        images: '',
        icons: '',
        associatedInstagram: '',
        associatedTiktok: '',
        associatedLinkedIn: '',
        associatedYoutube: '',
        associatedTwitch: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.subjectTitle) {
            onAdd(formData);
            setFormData({
                name: '',
                id: '',
                description: '',
                subjectTitle: '',
                skills: '',
                achievements: '',
                goals: '',
                passion: '',
                images: '',
                icons: '',
                associatedInstagram: '',
                associatedTiktok: '',
                associatedLinkedIn: '',
                associatedYoutube: '',
                associatedTwitch: ''
            });
        }
    };

    const handleChange = (field: keyof AboutMeObject, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Item</h3>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        ID
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.id}
                                        onChange={(e) => handleChange('id', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Subject Title *
                                </label>
                                <input
                                    type="text"
                                    value={formData.subjectTitle}
                                    onChange={(e) => handleChange('subjectTitle', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Description
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => handleChange('description', e.target.value)}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Skills (comma separated)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.skills}
                                        onChange={(e) => handleChange('skills', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                        placeholder="React, Node.js, TypeScript"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Icon (emoji)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.icons}
                                        onChange={(e) => handleChange('icons', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                        placeholder="💻"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Achievements
                                </label>
                                <textarea
                                    value={formData.achievements}
                                    onChange={(e) => handleChange('achievements', e.target.value)}
                                    rows={2}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Goals
                                </label>
                                <textarea
                                    value={formData.goals}
                                    onChange={(e) => handleChange('goals', e.target.value)}
                                    rows={2}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Passion
                                </label>
                                <textarea
                                    value={formData.passion}
                                    onChange={(e) => handleChange('passion', e.target.value)}
                                    rows={2}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Image Path
                                </label>
                                <input
                                    type="text"
                                    value={formData.images}
                                    onChange={(e) => handleChange('images', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                    placeholder="/path/to/image.svg"
                                />
                            </div>

                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Social Media Links</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Instagram
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.associatedInstagram}
                                            onChange={(e) => handleChange('associatedInstagram', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            TikTok
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.associatedTiktok}
                                            onChange={(e) => handleChange('associatedTiktok', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            LinkedIn
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.associatedLinkedIn}
                                            onChange={(e) => handleChange('associatedLinkedIn', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            YouTube
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.associatedYoutube}
                                            onChange={(e) => handleChange('associatedYoutube', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Twitch
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.associatedTwitch}
                                            onChange={(e) => handleChange('associatedTwitch', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-3 pt-6">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                                >
                                    Add Item
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function AboutMe() {
    const [aboutMeData, setAboutMeData] = useState<AboutMeObject[]>(sampleAboutMeData);
    const [showAddModal, setShowAddModal] = useState(false);

    const handleAddItem = (newItem: AboutMeObject) => {
        setAboutMeData([...aboutMeData, newItem]);
        setShowAddModal(false);
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
            {/* Header */}
            <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:bg-slate-800/80 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center space-x-3">
                            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">RC</span>
                                </div>
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">About Me</h1>
                            </Link>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                                Home
                            </Link>
                            <Link href="/codingProject" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                                Projects
                            </Link>
                            <Link href="/art" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                                Art
                            </Link>
                            <Link href="/login" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                                Login
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Discover My
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Passions & Skills
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Explore the different facets of my life, from professional achievements to personal interests. 
                        Each card represents a unique aspect of who I am and what drives me.
                    </p>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add New Item
                    </button>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {aboutMeData.map((item, index) => (
                            <AboutMeCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 dark:bg-slate-800/80 dark:border-slate-700 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <p className="text-gray-600 dark:text-gray-300">
                            © 2024 Roderick's Portfolio. Explore more about my journey and connect with me on social media.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Add Item Modal */}
            <AddItemModal
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                onAdd={handleAddItem}
            />
        </main>
    );
}
  