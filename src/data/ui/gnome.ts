import { DesktopEnvironment } from '../enum'
import {
  Customisability,
  PreferredLookAndFeel,
  TechExperienceAmount,
  UsageType,
} from '../../views'
import { Toolkit } from '../enum'

export const Gnome = {
  toolkit: Toolkit.GNOME,
  /**
   * Gnome is a really slick user experience
   */
  recommendedExperience: TechExperienceAmount.none,
  /**
   *
   */
  preferredAppCatagories: [
    UsageType.WebBrowsing,
    UsageType.DocumentEditing,
    UsageType.Email,
    UsageType.PhotoEditing,
    // Not going to give Gnome any points for development because gnome builder
    // seems to be basically unusable on my system for reasons I cannot entirely
    // comprehend
    /**
     * Gnome has a default browser (unlike kde or xfce), so I will give it that
     * point even through it is horrible and you should avoid using it
     */
    UsageType.WebBrowsing,
  ],
  /**
   * I think this is fairly self explanatory
   */
  lookAndFeel: PreferredLookAndFeel.Mac,
  /**
   * Gnomes customisability is hindered by GTK 4 bugs that seem to have broken
   * themes and that gnome couldn't be bothered to fix. This might be fine if
   * adwaita wasn't horrible
   */
  customisability: Customisability.partialIntermediate,

  desktopEnvironment: DesktopEnvironment.GNOME,
}
