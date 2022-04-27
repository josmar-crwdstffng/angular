import { Quote } from './quote';

export const QUOTES: Quote[] = [
  'Always do right. This will gratify some people and astonish the rest.',
  'I have never let my schooling interfere with my education.',
  'Do not go around saying the world owes you a living. The world owes you nothing. It was here first.',
  'Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
  'If you tell the truth, you do not have to remember anything.',
  'Clothes make the man. Naked people have little or no influence on society.',
  'It is not the size of the dog in the fight, it is the size of the fight in the dog.',
  'Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth is not.',
  'The man who does not read good books has no advantage over the man who cannot read them.',
  'Get your facts first, and then you can distort them as much as you please.',
]
.map((q, i) => ({ id: i + 1, quote: q }));
