export enum Toolkit {
  QT = 'QT',
  /**
   * GTK's development follows Gnome's needs and doesn't care about anyone else,
   * so it will get grouped with their desktop environment
   */
  GNOME = 'GNOME',
  None = 'Agnostic',
}

export enum DesktopEnvironment {
  KDE = 'KDE',
  XFCE = 'XFCE',
  GNOME = 'GNOME',
  Cinnamon = 'Cinnamon',
  None = 'Terminal',
}

export enum GeneralCategoryInfo {
  Desktop = 'Desktop',
  Enthusiast = 'Enthusiast',
  Server = 'Server',
}

export enum Customisability {
  limited = 'Wallpaper',
  /**
   * NOT TO BE USER EXPOSED. Used to represent a desktop where some apps accept
   * theming and some apps do not. This appears to be the case for gtk4 desktops
   * so all gtk-based desktops (gtk2, gtk3, gtk4) will be put under this category
   * as they share apps (e.g. blanket) until the gnome team gets their act
   * together and fixes whatever bug is causing gtk themes to not work with
   * gtk4 apps
   *
   * Also, these desktops cannot be advanced beyond partial intermediate, even if
   * they have advanced or partial advanced functionality
   */
  partialIntermediate = 'Broken theming',
  intermediate = 'Themable',

  /**
   * NOT TO BE USER EXPOSED. Used to represent a desktop where some panels, but not
   * all can be replaced or desktops where it is a real hassle to do it. Add to
   * review notes if you give something this
   */
  partialAdvanced = 'Partial layout',
  advanced = 'Full layout',
}

export enum PreferredLookAndFeel {
  Mac = 'Mac like',
  Windows10 = 'Windows like',
  None = 'User choice / Other',
}

export enum TechExperienceAmount {
  basic = 'Basic',
  intermediate = 'Intermediate',
  advanced = 'Advanced',
}

export enum UsageType {
  WebBrowsing = 'Web browsing',
  Email = 'Email',
  DocumentEditing = 'Document editing',

  PhotoEditing = 'Photo editing',
  VideoEditing = 'Video editing',
  AudioEditing = 'Audio editing',
  Programing = 'Programing',

  SinglePlayerGaming = 'Single player gaming',
  MultiplayerGaming = 'Multiplayer gaming',
}
