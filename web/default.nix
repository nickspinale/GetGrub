{ nixpkgs ? import <nixpkgs> {}, compiler ? "default" }:

let

  inherit (nixpkgs) pkgs;

  f = { mkDerivation, base, stdenv, wai-app-static, warp }:
      mkDerivation {
        pname = "web";
        version = "0.1.0.0";
        src = ./.;
        isLibrary = false;
        isExecutable = true;
        executableHaskellDepends = [ base wai-app-static warp ];
        license = stdenv.lib.licenses.mit;
      };

  haskellPackages = if compiler == "default"
                       then pkgs.haskellPackages
                       else pkgs.haskell.packages.${compiler};

  drv = haskellPackages.callPackage f {};

in

  if pkgs.lib.inNixShell then drv.env else drv
