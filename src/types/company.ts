export interface Company {
  data: {
    logo: string
    font_family: string
    totem_banner_url: string
    group_pizzas_by_type: boolean
    name: string
    about: string
    background_color: string
    primary_color: string
    secondary_color: string
    style_color: string
    is_open: boolean
    pick_up_time_minutes: number
    delivery_time_minutes: number
    email: string
    phone: string
    background_image: string
    has_schedule: boolean
    has_delivery: boolean
    has_pick_up_order: boolean
    has_eat_in_place: boolean
    totem_has_pick_up_order: boolean
    totem_has_eat_in_place: boolean
    totem_banner_active: boolean
    totem_active: boolean
    self_checkout_active: boolean
    allow_table_change: boolean
    whatsapp_url: string
    instagram_url: string
    facebook_url: string
    website_url: string
    google_maps_key: string
    delivery_fee_type: string
    customer_document_required: boolean
    google_maps_viewport: string
    totem_customer_name_required: boolean
    totem_table_required: boolean
    totem_has_balcon_payment: boolean
    minimum_order_value: string
    latitude: string
    longitude: string
    fb_pixel_id: string
    single_ordersheet_per_table: boolean
    address: {
      string: string
      complement: string
      cep: string
      number: number
      street: string
      neighborhood: string
      city: string
      latitude: string
      longitude: string
      state: string
    }
    messages: {
      text: string
      type: string
      msg_severity: string
    }[]
    has_pos_payment: boolean
    opening_hours: {
      day: number
      shift: string
      start: string
      end: string
    }[]
    increased_app_security: boolean
    display_flavor_additional_value: boolean
    custom_question: null | string
    roulette_enabled: boolean
    has_pix_online: boolean
    has_online_card_payment: boolean
  }
}