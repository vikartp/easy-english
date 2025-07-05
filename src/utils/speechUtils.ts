// Text-to-Speech utility using Web Speech API
export const speakText = (text: string, rate: number = 1, pitch: number = 1) => {
  if ('speechSynthesis' in window) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure voice settings
    utterance.rate = rate; // Speed (0.1 to 10)
    utterance.pitch = pitch; // Pitch (0 to 2)
    utterance.volume = 1; // Volume (0 to 1)
    
    // Try to use English voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(voice => 
      voice.lang.startsWith('en') && voice.name.includes('Google')
    ) || voices.find(voice => voice.lang.startsWith('en'));
    
    if (englishVoice) {
      utterance.voice = englishVoice;
    }
    
    // Speak the text
    window.speechSynthesis.speak(utterance);
    
    return utterance;
  } else {
    console.warn('Speech synthesis not supported in this browser');
    return null;
  }
};

// Stop current speech
export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

// Get available voices
export const getAvailableVoices = (): SpeechSynthesisVoice[] => {
  if ('speechSynthesis' in window) {
    return window.speechSynthesis.getVoices();
  }
  return [];
};

// Check if speech synthesis is supported
export const isSpeechSupported = (): boolean => {
  return 'speechSynthesis' in window;
};
