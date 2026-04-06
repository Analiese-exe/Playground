import { AudioToggleButton } from "@/components/AudioToggleButton";
import { ManagedImage } from "@/components/ManagedImage";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Profile, ThemeMode } from "@/types/portfolio";

interface HeaderProps {
  profile: Profile;
  theme: ThemeMode;
  onToggleTheme: (origin?: { x: number; y: number }) => void;
  isAudioEnabled: boolean;
  onToggleAudio: () => void;
}

export function Header({
  profile,
  theme,
  onToggleTheme,
  isAudioEnabled,
  onToggleAudio
}: HeaderProps) {
  return (
    <header className="site-header" data-reveal>
      <div className="identity">
        <div className="identity-avatar-wrap">
          <ManagedImage
            className="identity-avatar"
            src={profile.avatarSrc}
            alt={`Portrait of ${profile.name}`}
            critical
          />
          <span className="identity-status-dot" aria-hidden="true" />
        </div>
        <div className="identity-block">
          <p className="identity-name">{profile.name}</p>
          <p className="identity-role">{profile.role}</p>
        </div>
      </div>
      <div className="header-actions">
        <AudioToggleButton isPlaying={isAudioEnabled} onToggle={onToggleAudio} />
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
