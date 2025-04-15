// components/LoadMoreButton.tsx

interface LoadMoreButtonProps {
  onClick: () => void;
  isVisible: boolean;
  text?: string;
}

export const LoadMoreButton = ({
  onClick,
  isVisible,
  text = "Más bares...",
}: LoadMoreButtonProps) => {
  if (!isVisible) return null;

  return (
    <div className="container-button-mas">
      <button className="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
