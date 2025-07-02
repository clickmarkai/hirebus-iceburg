export const formatDescription = (text: string | undefined | null): string => {
  if (!text) {
    return '<p>No description available.</p>';
  }

  // Replace markdown bold, remove back-to-back backslashes completely, and newlines
  const formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\\\\/g, '') // Remove back-to-back backslashes completely
    .replace(/\n/g, '<br />');
    
  return formattedText;
}; 