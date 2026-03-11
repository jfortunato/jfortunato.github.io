{ pkgs, ... }:

{
  packages = with pkgs; [
    hugo
  ];

  languages.go.enable = true;
}
