'use client'

import { useState, useRef } from 'react'
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi'

export default function VideoPlayer({ src, poster, title }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <div className="relative group rounded-xl overflow-hidden bg-gray-900">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-auto"
        loop
        muted={isMuted}
        playsInline
      />
      
      {/* Video Controls Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
        <button
          onClick={togglePlay}
          className="bg-white bg-opacity-90 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300"
        >
          {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
        </button>
      </div>
      
      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={toggleMute} className="text-white">
          {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
        </button>
      </div>
      
      {title && (
        <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-lg text-sm">
          {title}
        </div>
      )}
    </div>
  )
}