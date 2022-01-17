import { DesktopEnvironment } from '..'
import {
  Customisability,
  PreferredLookAndFeel,
  TechExperienceAmount,
  UsageType,
} from '../../views'
import { Toolkit } from '../enum'

export const KDE = {
  toolkit: Toolkit.QT,
  /**
   * KDE is still a touch messy and hard to wrap your head around, although it
   * is improving, so it gets an intermediate recommendation for now
   */
  recommendedExperience: TechExperienceAmount.intermediate,
  /**
   * KDE has really great performance when it comes to games because of a number
   * of optimizations they have made to their compositor. Kdenlive is one of the
   * best foss video editing applications and it is developed by the KDE team, so
   * they get a boost because of that
   */
  preferredAppCatagories: [
    UsageType.MultiplayerGaming,
    UsageType.SinglePlayerGaming,
    UsageType.VideoEditing,
    /**
     * Program is DE specific. I don't really like KDevelop or Kate, but they are
     * better than gnome builder. Also QT creator is amazing when it comes to
     * creating qt applications
     */
    UsageType.Programing,
    // KDE doesn't seem to have a default web browser as of yet, so it gets no
    // points for webbrowsing. Also firefox uses the Gnome toolkit, so it cant
    // use firefox as its default
  ],
  /**
   * I think this is fairly self explanatory
   */
  lookAndFeel: PreferredLookAndFeel.Windows10,
  /**
   * KDE lets you change just about anything you could possibly want
   */
  customisability: Customisability.advanced,

  desktopEnvironment: DesktopEnvironment.KDE,
}
