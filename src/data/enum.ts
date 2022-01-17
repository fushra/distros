export enum Toolkit {
  QT = 'QT',
  /**
   * GTK's development follows Gnome's needs and doesn't care about anyone else,
   * so it will get grouped with their desktop environment
   */
  GNOME = 'GNOME',
}

export enum DesktopEnvironment {
  KDE,
  XFCE,
  GNOME,
}
