import { VolumeOffIcon, VolumeOnIcon } from "@/components/icons";

interface AudioToggleButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function AudioToggleButton({ isPlaying, onToggle }: AudioToggleButtonProps) {
  return (
    <button
      type="button"
      className="sound-toggle"
      aria-label={isPlaying ? "Mute background music" : "Play background music"}
      aria-pressed={isPlaying}
      title={isPlaying ? "Mute background music" : "Play background music"}
      onClick={onToggle}
    >
      {isPlaying ? <VolumeOnIcon className="lucide-icon" /> : <VolumeOffIcon className="lucide-icon" />}
    </button>
  );
}
