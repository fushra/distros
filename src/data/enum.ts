export enum Toolkit {
  QT = 'QT',
  /**
   * GTK's development follows Gnome's needs and doesn't care about anyone else,
   * so it will get grouped with their desktop environment
   */
  GNOME = 'GNOME',
  None = 'None',
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
