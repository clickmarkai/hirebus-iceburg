export const formatDescription = (text: string | undefined | null): string => {
  if (!text) {
    return '<p>No description available.</p>';
  }

  // Replace markdown bold, escaped hyphens, and newlines
  const formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\\-/g, '-')
    .replace(/\n/g, '<br />');
    
  return formattedText;
}; 