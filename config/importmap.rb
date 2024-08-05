# Pin npm packages by running ./bin/importmap

pin "application"
pin "swiper" # @11.1.8

pin_all_from "app/javascript/helpers", under: "helpers"
