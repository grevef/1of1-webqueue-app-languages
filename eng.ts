const en = {
  // Common
  common: {
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    back: "Back",
    loading: "Loading...",
    confirm: "Confirm",
    yes: "Yes",
    no: "No",
    enabled: "Enabled",
    disabled: "Disabled",
    configured: "Configured",
    not_configured: "Not Configured",
    coming_soon: "Coming Soon",
    available: "Available",
    click_to_manage: "Click to manage",
    click_to_setup: "Click to setup",
    click_to_customize: "Click to customize",
    required: "Required",
    optional: "Optional",
    search: "Search",
    no_results: "No results found",
    error: "Something went wrong",
    success: "Success",
  },

  // Navigation / Sidebar
  nav: {
    dashboard: "Dashboard",
    queue: "Queue",
    tickets: "Tickets",
    applications: "Applications",
    settings: "Settings",
    logout: "Logout",
  },

  // Auth
  auth: {
    login: "Login with Discord",
    logout: "Logout",
    login_description: "Sign in with your Discord account to continue",
  },

  // Customer dashboard
  customer: {
    welcome: "Welcome back, {name}!",
    subtitle: "Manage your FiveM server configuration and queue settings.",
    setup_progress: "Setup Progress",
    required_completed: "{completed} of {total} required items completed",
    completed: "Completed",
    remaining: "Remaining",
    all_completed: "All required items completed!",
    done: "Done",

    // Section headers
    essential_setup: "Essential Setup",
    discord_configuration: "Discord Configuration",
    features: "Features",
    branding: "Branding",

    // Essential setup cards
    fivem_title: "FiveM API Configuration",
    fivem_desc_done: "Your FiveM server is configured and ready for queue management.",
    fivem_desc_pending: "Configure your FiveM API settings to enable queue management.",

    discord_title: "Discord Setup",
    discord_desc_done: "Your Discord bot is configured and ready for queue management.",
    discord_desc_pending: "Configure your Discord bot token and guild ID for queue management.",

    tebex_title: "Tebex API Configuration",
    tebex_desc_done: "Your Tebex API is configured and ready for payment tracking.",
    tebex_desc_pending: "Configure your Tebex API key to enable purchase history tracking.",

    // Discord configuration cards
    dashboard_roles_title: "Dashboard Roles Setup",
    dashboard_roles_desc: "Configure which Discord roles can access the dashboard and join the queue.",
    dashboard_roles_locked: "Complete Discord setup first to configure dashboard and queue access roles.",

    queue_roles_title: "Queue Roles",
    queue_roles_desc: "Configure Discord roles for queue priority, bypass slots, and express pass.",
    queue_roles_desc_done: "You have Discord roles configured for queue priority and bypass.",
    queue_roles_locked: "Complete Discord setup first to configure queue roles.",

    moderators_title: "Moderators",
    moderators_desc: "Add moderators to help manage tickets and applications for your server.",
    moderators_desc_done: "You have moderators with access to tickets and applications.",
    moderators_locked: "Complete Discord setup first to manage moderators.",
    discord_required: "Complete Discord setup first",

    // Features cards
    module_settings_title: "Module Settings",
    module_settings_desc: "Enable or disable modules and control queue access for players and moderators",

    application_builder_title: "Application Builder",
    application_builder_desc: "Create and manage form applications with custom questions for players to fill out.",

    tickets_title: "Tickets",
    tickets_desc: "Manage ticket categories and customize your support system for players and moderators.",

    notifications_title: "Discord Notifications",
    notifications_desc: "Configure Discord notifications for queue, applications, and tickets",

    queue_builder_title: "Queue Builder",
    queue_builder_desc: "Build and customize your queue system with advanced rules, priorities, and automation features.",

    language_title: "Language",
    language_desc: "Set the language for the player-facing interface.",

    // Branding cards
    app_customization_title: "App Customization",
    app_customization_desc: "Customize app-wide settings like primary color that apply to the entire application.",

    dashboard_customization_title: "Dashboard Customization",
    dashboard_customization_desc: "Customize your dashboard navbar logo that will be visible to you and all players/moderators.",

    home_page_title: "Home Page Customization",
    home_page_desc: "Customize your landing page appearance, content, and quick links for players.",

    login_customization_title: "Login Customization",
    login_customization_desc: "Customize your login page appearance, branding, and authentication flow.",

    custom_domain_title: "Custom Domain",
    custom_domain_desc_done: "Your custom domain is configured and ready to use.",
    custom_domain_desc_pending: "Configure a custom domain to use your own domain name for your landing page.",
  },

  // Language settings page
  language: {
    title: "Language",
    description: "Set the language for the player-facing interface.",
    select_label: "Interface Language",
    select_description: "This controls the language players see when using your queue, tickets, and applications.",
    select_language: "Select Language",
    select_language_description: "Choose the language players will see when using your queue, tickets, and applications.",
    save_success: "Language saved successfully",
    save_error: "Failed to save language",
    english: "English",
    spanish: "Spanish",
  },

  // Queue
  queue: {
    title: "Queue",
    position: "Position",
    join: "Join Queue",
    leave: "Leave Queue",
    players_in_queue: "{count} players in queue",
    your_position: "Your position: {position}",
    estimated_wait: "Estimated wait: {time}",
    queue_closed: "Queue is closed",
    queue_open: "Queue is open",
  },

  // Tickets
  tickets: {
    title: "Tickets",
    create: "Create Ticket",
    open: "Open",
    closed: "Closed",
    no_tickets: "No tickets yet",
    subject: "Subject",
    description: "Description",
    status: "Status",
    created_at: "Created",
    updated_at: "Last updated",
    close_ticket: "Close Ticket",
    ticket_closed: "Ticket closed",
    message_placeholder: "Type your message...",
    send: "Send",
  },

  // Applications
  applications: {
    title: "Applications",
    submit: "Submit Application",
    no_applications: "No applications available",
    submitted: "Application submitted successfully",
    already_submitted: "You have already submitted this application",
    status: "Status",
    pending: "Pending",
    approved: "Approved",
    rejected: "Rejected",
  },
};

export type TranslationKeys = typeof en;
export default en;
