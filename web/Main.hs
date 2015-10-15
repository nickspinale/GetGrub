module Main where

import Network.Wai.Handler.Warp
import Network.Wai.Application.Static
import System.Environment

main = do
    args <- getArgs
    case args of
        [port, base] ->
            case reads port of
                [(n, "")] -> run n . staticApp $ defaultWebAppSettings base
                _ -> usage
        _ -> usage
  where
    usage = putStrLn "Usage: serve [PORT] [BASE_DIRECTORY]"

