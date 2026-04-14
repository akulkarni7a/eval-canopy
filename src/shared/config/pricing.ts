export const PRICING_CONFIG = {
  plans: [
    {
      id: 'free',
      name: 'Free',
      price_monthly: 0,
      limits: {
        max_graphs: 3,
        max_nodes_per_graph: 100,
        sharing_mode: 'read_only',
        export_formats: ['markdown'],
        sync_priority: 'standard',
        themes: 2,
      },
    },
    {
      id: 'pro',
      name: 'Pro',
      price_monthly: 8.0,
      price_annual: 72.0,
      limits: {
        max_graphs: 'unlimited',
        max_nodes_per_graph: 'unlimited',
        sharing_mode: 'editable',
        export_formats: ['markdown', 'pdf', 'png'],
        sync_priority: 'priority',
        themes: 'all',
      },
    },
  ],
};
