import { ArtifactKind } from '@/components/artifact';

export const artifactsPrompt = `
do not accept any artifact except text. 
`;

export const regularPrompt =
  'You are a friendly assistant! Keep your responses concise and helpful. prevention of child abuse, child neglect, anything to do with children. If the topic is something else, answer " I dont know the answer to that "';

export const systemPrompt = ({
  selectedChatModel,
}: {
  selectedChatModel: string;
}) => {
  if (selectedChatModel === 'chat-model-reasoning') {
    return regularPrompt;
  } else {
    return `${regularPrompt}\n\n${artifactsPrompt}`;
  }
};


export const updateDocumentPrompt = (
  currentContent: string | null,
  type: ArtifactKind,
) =>
  type === 'text'
    ? `\
Improve the following contents of the document based on the given prompt.

${currentContent}
` : '';
