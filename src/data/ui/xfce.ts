import {
  Customisability,
  PreferredLookAndFeel,
  TechExperienceAmount,
  UsageType,
} from '../../views'
import { Toolkit, DesktopEnvironment } from '../enum'

export const XFCE = {
  toolkit: Toolkit.GNOME,
  /**
   * XFCE has a few rough edges that may need some getting used to, but it is
   * still simpler and easier to use than KDE
   */
  recommendedExperience: TechExperienceAmount.basic,
  /**
   * XFCE inherits from Gnome so all gtk applications will feel (sorta) native.
   * Thus, XFCE gets to inherit gnome's excellent document editing, email and
   * photo editing apps
   */
  preferredAppCatagories: [
    UsageType.DocumentEditing,
    UsageType.Email,
    UsageType.PhotoEditing,
  ],
  /**
   * I think this is fairly self explanatory
   */
  lookAndFeel: PreferredLookAndFeel.Windows10,
  /**
   * Crippled by Gnome toolkit
   */
  customisability: Customisability.partialIntermediate,
  desktopEnvironment: DesktopEnvironment.XFCE,
}
