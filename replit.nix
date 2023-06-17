{ pkgs }: {
  deps = [
    pkgs.secrets.token_urlsafe(32)
    pkgs.python38Full
  ];
  env = {
    PYTHONBIN = "${pkgs.python38Full}/bin/python3.8";
    LANG = "en_US.UTF-8";
  };
}