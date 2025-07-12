'use client'
import Image from "next/image";
import { useState } from 'react';

// --- Art Object Model ---
type Comment = {
  user: string;
  text: string;
  date: string;
};

type ArtObject = {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  likes: number;
  dislikes: number;
  comments: Comment[];
};

// --- Navigation Bar ---
function NavBar() {
  return (
    <nav className="w-full bg-white shadow flex items-center justify-between px-8 py-4 mb-8">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-bold text-amber-600">Art Gallery</span>
        <a href="/login" className="text-gray-700 hover:text-amber-600 font-medium transition">Login</a>
        <a href="/" className="text-gray-700 hover:text-amber-600 font-medium transition">Home</a>
        <a href="/codingProject" className="text-gray-700 hover:text-amber-600 font-medium transition">Coding Projects</a>
      </div>
    </nav>
  );
}

// --- Art Carousel Item ---
function ArtCarouselItem({
  art,
  onLike,
  onDislike,
  onAddComment,
}: {
  art: ArtObject;
  onLike: () => void;
  onDislike: () => void;
  onAddComment: (comment: string) => void;
}) {
  const [commentInput, setCommentInput] = useState('');

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="w-full flex flex-col items-center">
        <div className="w-96 h-96 relative mb-6">
          <Image
            src={art.image}
            alt={art.title}
            fill
            style={{ objectFit: 'cover', borderRadius: '1rem' }}
            className="shadow"
            sizes="384px"
            priority
          />
        </div>
        <h2 className="text-3xl font-bold mb-2 text-amber-700">{art.title}</h2>
        <p className="text-gray-600 mb-2 italic">Location: {art.location}</p>
        <p className="text-gray-800 mb-4">{art.description}</p>
        <div className="flex items-center gap-6 mb-4">
          <button
            className="flex items-center gap-1 px-3 py-1 rounded bg-amber-100 hover:bg-amber-200 transition"
            onClick={onLike}
            aria-label="Like"
          >
            <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20"><path d="M3 10a7 7 0 1114 0A7 7 0 013 10zm7-5a5 5 0 100 10A5 5 0 0010 5z"/></svg>
            <span>{art.likes}</span>
          </button>
          <button
            className="flex items-center gap-1 px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 transition"
            onClick={onDislike}
            aria-label="Dislike"
          >
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z"/></svg>
            <span>{art.dislikes}</span>
          </button>
        </div>
      </div>
      <div className="w-full mt-4">
        <h3 className="text-lg font-semibold mb-2 text-amber-700">Comments</h3>
        <div className="max-h-40 overflow-y-auto mb-2">
          {art.comments.length === 0 && (
            <p className="text-gray-400 italic">No comments yet.</p>
          )}
          {art.comments.map((c, idx) => (
            <div key={idx} className="mb-2 border-b pb-1">
              <span className="font-semibold text-gray-700">{c.user}</span>
              <span className="text-xs text-gray-400 ml-2">{c.date}</span>
              <div className="text-gray-800">{c.text}</div>
            </div>
          ))}
        </div>
        <form
          className="flex gap-2"
          onSubmit={e => {
            e.preventDefault();
            if (commentInput.trim()) {
              onAddComment(commentInput.trim());
              setCommentInput('');
            }
          }}
        >
          <input
            className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
            type="text"
            placeholder="Add a comment..."
            value={commentInput}
            onChange={e => setCommentInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600 transition"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

// --- Carousel Controls ---
function CarouselControls({
  total,
  current,
  onPrev,
  onNext,
}: {
  total: number;
  current: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center justify-center gap-6 mt-6">
      <button
        onClick={onPrev}
        className="p-2 rounded-full bg-gray-100 hover:bg-amber-100 transition"
        aria-label="Previous"
        disabled={total === 0}
      >
        <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <span className="text-gray-600 font-medium">
        {total === 0 ? '0/0' : `${current + 1} / ${total}`}
      </span>
      <button
        onClick={onNext}
        className="p-2 rounded-full bg-gray-100 hover:bg-amber-100 transition"
        aria-label="Next"
        disabled={total === 0}
      >
        <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

// --- Main Page ---
export default function ArtGalleryPage() {
  // Example art objects
  const [artList, setArtList] = useState<ArtObject[]>([
    {
      id: '1',
      title: 'Sunset Over the Lake',
      description: 'A beautiful sunset captured over the tranquil lake in Switzerland.',
      location: 'Lake Geneva, Switzerland',
      image: '/art/sunset-lake.jpg',
      likes: 12,
      dislikes: 1,
      comments: [
        { user: 'Alice', text: 'Stunning colors!', date: '2024-06-01' },
        { user: 'Bob', text: 'Reminds me of my trip there.', date: '2024-06-02' },
      ],
    },
    {
      id: '2',
      title: 'Urban Geometry',
      description: 'A study of lines and shapes in modern city architecture.',
      location: 'New York, USA',
      image: '/art/urban-geometry.jpg',
      likes: 8,
      dislikes: 0,
      comments: [],
    },
    {
      id: '3',
      title: 'Forest Path',
      description: 'A peaceful path winding through a dense forest.',
      location: 'Black Forest, Germany',
      image: '/art/forest-path.jpg',
      likes: 15,
      dislikes: 2,
      comments: [
        { user: 'Charlie', text: 'So calming!', date: '2024-06-03' },
      ],
    },
  ]);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Carousel navigation
  const goPrev = () => setCurrentIdx(idx => (artList.length === 0 ? 0 : (idx - 1 + artList.length) % artList.length));
  const goNext = () => setCurrentIdx(idx => (artList.length === 0 ? 0 : (idx + 1) % artList.length));

  // Like/Dislike/Comment handlers
  const handleLike = () => {
    setArtList(list =>
      list.map((art, idx) =>
        idx === currentIdx ? { ...art, likes: art.likes + 1 } : art
      )
    );
  };
  const handleDislike = () => {
    setArtList(list =>
      list.map((art, idx) =>
        idx === currentIdx ? { ...art, dislikes: art.dislikes + 1 } : art
      )
    );
  };
  const handleAddComment = (comment: string) => {
    setArtList(list =>
      list.map((art, idx) =>
        idx === currentIdx
          ? {
              ...art,
              comments: [
                ...art.comments,
                {
                  user: 'Guest',
                  text: comment,
                  date: new Date().toISOString().slice(0, 10),
                },
              ],
            }
          : art
      )
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-white flex flex-col">
      <NavBar />
      <section className="flex-1 flex flex-col items-center justify-center px-4">
        {artList.length > 0 ? (
          <>
            <ArtCarouselItem
              art={artList[currentIdx]}
              onLike={handleLike}
              onDislike={handleDislike}
              onAddComment={handleAddComment}
            />
            <CarouselControls
              total={artList.length}
              current={currentIdx}
              onPrev={goPrev}
              onNext={goNext}
            />
          </>
        ) : (
          <div className="text-center text-gray-400 text-xl mt-32">
            No art objects to display.
          </div>
        )}
      </section>
    </main>
  );
}