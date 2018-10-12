import VueRouter, { Route } from "vue-router";

interface routerInfo { path: string, name: string }

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter;
    $route: Route;

    $routersInfo: {
      empty: routerInfo
      home: routerInfo
      oauth: routerInfo
    }

    $i18nTags: {
      statusCard: {
        reply_to_replier: string,
        reply_to_main_status: string
      },
      common: {
        status_visibility_public: string
        status_visibility_private: string
      },
      header: {

      },
      home: {

      },
      oauth: {
        form_brand: string
        login_hint: string
        server_input_label: string
        please_input_server_url: string
        please_input_correct_server_url: string
        register_app_error_message: string
      }
    }

    $toast: {
      error: (msg: string) => void
    }
  }
}