import {
  Customisability,
  DesktopEnvironment,
  GeneralCategoryInfo,
  PreferredLookAndFeel,
  TechExperienceAmount,
  UsageType,
} from '../enum'
import { Toolkit } from '../enum'

export const Gnome = {
  toolkit: Toolkit.GNOME,
  /**
   * Gnome is a really slick user experience
   */
  experienceLevel: TechExperienceAmount.basic,
  /**
   *
   */
  preferredAppCatagories: [
    UsageType.DocumentEditing,
    UsageType.Email,
    UsageType.PhotoEditing,
    UsageType.Programing,
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
  // Anything running Gnome is a desktop
  generalCategory: GeneralCategoryInfo.Desktop,
}
