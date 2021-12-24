
(ns app.main
  (:require [app.lib :as lib]
            [reagent.core :as r]
            [reagent.dom :as rd]))

(def a 1)

(defonce b 2)

(defn app []
  [:div
   [:h1 "Hello"]
   [:p "I am a clojuresript component!"]
   [:br]
   [:p ""]]
  )

(defn mountit []
  (rd/render [app]
             (.getElementById js/document "app")))

(defn main! []
  (println "[main]: loading")
  (mountit))

(defn ^:dev/after-load reload! []
  (println "[main] reloaded lib:" lib/c lib/d)
  (println "[main] reloaded:" a b))
