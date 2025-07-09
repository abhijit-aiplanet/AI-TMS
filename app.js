// AI-Enhanced Transport Management System JavaScript

// Application state
let currentView = 'dashboard';
let currentTheme = 'light';

// Enhanced AI-powered mock data with more realistic and comprehensive information
const mockData = {
  vehicles: [
    {
      id: "TRK001",
      status: "Active",
      health_score: 85,
      next_maintenance: "2024-02-15",
      fuel_efficiency: 7.2,
      location: "Mumbai",
      driver: "Rajesh Kumar",
      cargo_capacity: 15000,
      current_load: 12500,
      ai_recommendations: ["Schedule maintenance within 2 weeks", "Optimize fuel consumption"],
      predictive_alerts: ["Brake pad replacement needed in 500km", "Engine oil change due"],
      maintenance_cost_prediction: 15000,
      downtime_risk: "Low"
    },
    {
      id: "TRK002",
      status: "Active",
      health_score: 92,
      next_maintenance: "2024-03-01",
      fuel_efficiency: 8.1,
      location: "Delhi",
      driver: "Amit Singh",
      cargo_capacity: 18000,
      current_load: 16200,
      ai_recommendations: ["Operating optimally", "Consider route optimization"],
      predictive_alerts: ["All systems normal"],
      maintenance_cost_prediction: 8000,
      downtime_risk: "Very Low"
    },
    {
      id: "TRK003",
      status: "Maintenance",
      health_score: 78,
      next_maintenance: "2024-01-20",
      fuel_efficiency: 6.8,
      location: "Service Center",
      driver: "Suresh Patel",
      cargo_capacity: 12000,
      current_load: 0,
      ai_recommendations: ["Complete maintenance immediately", "Replace worn components"],
      predictive_alerts: ["Transmission service required", "Tire replacement needed"],
      maintenance_cost_prediction: 25000,
      downtime_risk: "High"
    }
  ],
  products: [
    {
      id: "PRD001",
      name: "Electronics Components",
      category: "Electronics",
      ai_category_confidence: 98,
      auto_description: "High-value electronic components requiring careful handling and climate control",
      packaging_recommendation: "Anti-static packaging with cushioning",
      risk_level: "High",
      insurance_required: true,
      estimated_value: 150000
    },
    {
      id: "PRD002",
      name: "Textile Materials",
      category: "Textiles",
      ai_category_confidence: 95,
      auto_description: "Bulk textile materials for manufacturing, moisture-sensitive",
      packaging_recommendation: "Waterproof packaging with desiccants",
      risk_level: "Medium",
      insurance_required: false,
      estimated_value: 45000
    },
    {
      id: "PRD003",
      name: "Pharmaceutical Supplies",
      category: "Healthcare",
      ai_category_confidence: 99,
      auto_description: "Temperature-sensitive pharmaceutical products requiring cold chain",
      packaging_recommendation: "Insulated containers with temperature monitoring",
      risk_level: "Critical",
      insurance_required: true,
      estimated_value: 280000
    }
  ],
  carriers: [
    {
      id: "CAR001",
      name: "FastLogistics",
      ai_performance_score: 87,
      reliability_rating: 4.2,
      cost_efficiency: 78,
      on_time_delivery: 89,
      damage_rate: 0.8,
      ai_recommendation: "Recommended for standard deliveries",
      risk_assessment: "Low",
      contract_optimization_suggestions: ["Negotiate better rates for bulk shipments", "Add performance bonuses"]
    },
    {
      id: "CAR002",
      name: "QuickDelivery",
      ai_performance_score: 92,
      reliability_rating: 4.6,
      cost_efficiency: 85,
      on_time_delivery: 94,
      damage_rate: 0.3,
      ai_recommendation: "Preferred partner for high-value shipments",
      risk_assessment: "Very Low",
      contract_optimization_suggestions: ["Extend contract duration", "Increase volume commitments"]
    },
    {
      id: "CAR003",
      name: "ReliableTransport",
      ai_performance_score: 75,
      reliability_rating: 3.8,
      cost_efficiency: 82,
      on_time_delivery: 81,
      damage_rate: 1.2,
      ai_recommendation: "Use for non-critical shipments only",
      risk_assessment: "Medium",
      contract_optimization_suggestions: ["Implement performance penalties", "Reduce dependency"]
    }
  ],
  orders: [
    {id: "ORD001", status: "In Transit", eta: "2024-01-15 14:30", confidence: 95, carrier: "FastLogistics"},
    {id: "ORD002", status: "Scheduled", eta: "2024-01-16 09:15", confidence: 88, carrier: "QuickDelivery"},
    {id: "ORD003", status: "Delivered", eta: "2024-01-14 16:45", confidence: 100, carrier: "ReliableTransport"}
  ],
  routes: [
    {
      id: "RT001",
      origin: "Mumbai",
      destination: "Delhi",
      distance: 1200,
      optimized_time: "18h 30m",
      savings: "2h 15m",
      original_time: "20h 45m",
      fuel_savings: "₹3,200",
      traffic_factor: 0.85,
      weather_impact: "Low",
      ai_confidence: 94,
      alternative_routes: 3,
      cost_per_km: 45,
      estimated_delivery: "2024-01-16 08:30",
      priority: "High",
      vehicle_type: "Heavy Truck",
      cargo_value: "₹2,50,000"
    },
    {
      id: "RT002",
      origin: "Bangalore",
      destination: "Chennai",
      distance: 350,
      optimized_time: "5h 45m",
      savings: "45m",
      original_time: "6h 30m",
      fuel_savings: "₹850",
      traffic_factor: 0.92,
      weather_impact: "None",
      ai_confidence: 97,
      alternative_routes: 2,
      cost_per_km: 42,
      estimated_delivery: "2024-01-15 16:45",
      priority: "Medium",
      vehicle_type: "Medium Truck",
      cargo_value: "₹1,20,000"
    },
    {
      id: "RT003",
      origin: "Delhi",
      destination: "Kolkata",
      distance: 1500,
      optimized_time: "22h 10m",
      savings: "3h 20m",
      original_time: "25h 30m",
      fuel_savings: "₹4,800",
      traffic_factor: 0.78,
      weather_impact: "Medium",
      ai_confidence: 89,
      alternative_routes: 4,
      cost_per_km: 48,
      estimated_delivery: "2024-01-17 12:10",
      priority: "High",
      vehicle_type: "Heavy Truck",
      cargo_value: "₹3,80,000"
    }
  ],
  transport_orders: [
    {
      id: "TO001",
      customer: "TechCorp Industries",
      pickup_location: "Mumbai",
      delivery_location: "Delhi",
      scheduled_pickup: "2024-01-15 09:00",
      estimated_delivery: "2024-01-16 08:30",
      ai_priority_score: 85,
      load_weight: 12500,
      cargo_type: "Electronics",
      assigned_vehicle: "TRK001",
      route_id: "RT001",
      delivery_confidence: 94,
      cost_estimate: "₹54,000",
      profit_margin: 22,
      ai_recommendations: ["Use express route", "Monitor weather conditions"],
      risk_factors: ["Traffic congestion", "Weather delays"]
    },
    {
      id: "TO002",
      customer: "Fashion Hub Ltd",
      pickup_location: "Bangalore",
      delivery_location: "Chennai",
      scheduled_pickup: "2024-01-15 11:00",
      estimated_delivery: "2024-01-15 16:45",
      ai_priority_score: 72,
      load_weight: 8500,
      cargo_type: "Textiles",
      assigned_vehicle: "TRK002",
      route_id: "RT002",
      delivery_confidence: 97,
      cost_estimate: "₹14,700",
      profit_margin: 18,
      ai_recommendations: ["Standard route optimal", "No special handling required"],
      risk_factors: ["Minimal risk"]
    },
    {
      id: "TO003",
      customer: "MediSupply Co",
      pickup_location: "Delhi",
      delivery_location: "Kolkata",
      scheduled_pickup: "2024-01-16 06:00",
      estimated_delivery: "2024-01-17 12:10",
      ai_priority_score: 95,
      load_weight: 6800,
      cargo_type: "Pharmaceuticals",
      assigned_vehicle: "TRK003",
      route_id: "RT003",
      delivery_confidence: 89,
      cost_estimate: "₹72,000",
      profit_margin: 28,
      ai_recommendations: ["Temperature monitoring required", "Priority handling"],
      risk_factors: ["Weather conditions", "Cold chain maintenance"]
    }
  ],
  spot_auctions: [
    {
      id: "SA001",
      route: "Mumbai → Pune",
      distance: 150,
      cargo_type: "General",
      weight: 5000,
      pickup_date: "2024-01-16",
      current_bid: "₹8,500",
      ai_suggested_bid: "₹9,200",
      market_demand: "High",
      competition_level: 7,
      win_probability: 78,
      profit_estimate: "₹2,100",
      bidding_deadline: "2024-01-15 18:00",
      carrier_count: 12,
      ai_recommendation: "Bid recommended - high profit potential"
    },
    {
      id: "SA002",
      route: "Chennai → Coimbatore",
      distance: 350,
      cargo_type: "Machinery",
      weight: 15000,
      pickup_date: "2024-01-17",
      current_bid: "₹18,000",
      ai_suggested_bid: "₹17,500",
      market_demand: "Medium",
      competition_level: 5,
      win_probability: 65,
      profit_estimate: "₹3,800",
      bidding_deadline: "2024-01-16 12:00",
      carrier_count: 8,
      ai_recommendation: "Consider bidding - moderate competition"
    },
    {
      id: "SA003",
      route: "Delhi → Jaipur",
      distance: 280,
      cargo_type: "Electronics",
      weight: 8000,
      pickup_date: "2024-01-18",
      current_bid: "₹15,200",
      ai_suggested_bid: "₹16,800",
      market_demand: "Very High",
      competition_level: 9,
      win_probability: 45,
      profit_estimate: "₹4,200",
      bidding_deadline: "2024-01-17 09:00",
      carrier_count: 18,
      ai_recommendation: "High risk - intense competition"
    }
  ],
  performance_metrics: {
    on_time_delivery: 94,
    cost_reduction: 23,
    fuel_efficiency: 18,
    maintenance_prediction: 89
  },
  execution_orders: [
    {
      id: "EO001",
      order_id: "TO001",
      customer: "TechCorp Industries",
      status: "In Transit",
      current_location: "Highway NH-8, 45km from Delhi",
      destination: "Delhi",
      driver: "Rajesh Kumar",
      vehicle: "TRK001",
      progress: 75,
      estimated_arrival: "2024-01-16 08:30",
      actual_eta_prediction: "2024-01-16 08:45",
      eta_confidence: 92,
      delay_risk: "Low",
      exceptions: [],
      ai_recommendations: ["Maintain current speed", "Monitor traffic ahead"],
      tracking_updates: [
        { time: "06:00", location: "Mumbai Depot", status: "Departed" },
        { time: "14:30", location: "Nashik", status: "Rest Stop" },
        { time: "18:45", location: "Current Location", status: "In Transit" }
      ],
      cargo_condition: "Excellent",
      temperature: "22°C",
      humidity: "45%",
      security_status: "Secure"
    },
    {
      id: "EO002",
      order_id: "TO002",
      customer: "Fashion Hub Ltd",
      status: "Loading",
      current_location: "Bangalore Warehouse",
      destination: "Chennai",
      driver: "Amit Singh",
      vehicle: "TRK002",
      progress: 15,
      estimated_arrival: "2024-01-15 16:45",
      actual_eta_prediction: "2024-01-15 16:30",
      eta_confidence: 95,
      delay_risk: "Very Low",
      exceptions: [],
      ai_recommendations: ["Loading on schedule", "Weather conditions favorable"],
      tracking_updates: [
        { time: "10:00", location: "Bangalore Warehouse", status: "Loading Started" },
        { time: "10:45", location: "Bangalore Warehouse", status: "50% Loaded" }
      ],
      cargo_condition: "Good",
      temperature: "25°C",
      humidity: "60%",
      security_status: "Secure"
    },
    {
      id: "EO003",
      order_id: "TO003",
      customer: "MediSupply Co",
      status: "Exception",
      current_location: "Delhi Depot",
      destination: "Kolkata",
      driver: "Suresh Patel",
      vehicle: "TRK003",
      progress: 5,
      estimated_arrival: "2024-01-17 12:10",
      actual_eta_prediction: "2024-01-17 15:30",
      eta_confidence: 78,
      delay_risk: "High",
      exceptions: [
        { type: "Vehicle Issue", description: "Minor engine warning", severity: "Medium", time: "09:15" },
        { type: "Weather", description: "Heavy rain expected", severity: "Low", time: "09:30" }
      ],
      ai_recommendations: ["Schedule immediate vehicle inspection", "Consider backup vehicle", "Monitor weather conditions"],
      tracking_updates: [
        { time: "08:00", location: "Delhi Depot", status: "Departure Delayed" },
        { time: "09:15", location: "Delhi Depot", status: "Vehicle Check" }
      ],
      cargo_condition: "Critical - Temperature Sensitive",
      temperature: "4°C",
      humidity: "40%",
      security_status: "High Alert"
    }
  ],
  dock_operations: [
    {
      id: "DOCK001",
      name: "Mumbai Central Dock",
      status: "Active",
      capacity: 12,
      current_occupancy: 8,
      utilization: 67,
      scheduled_arrivals: 3,
      scheduled_departures: 2,
      average_turnaround: "2.5 hours",
      ai_efficiency_score: 85,
      congestion_level: "Medium",
      next_available_slot: "2024-01-15 14:30",
      ai_recommendations: ["Optimize slot allocation", "Reduce turnaround time by 15 minutes"],
      active_operations: [
        { vehicle: "TRK004", operation: "Loading", eta_completion: "13:45", progress: 60 },
        { vehicle: "TRK005", operation: "Unloading", eta_completion: "14:15", progress: 80 },
        { vehicle: "TRK006", operation: "Inspection", eta_completion: "13:30", progress: 90 }
      ]
    },
    {
      id: "DOCK002",
      name: "Delhi North Dock",
      status: "Congested",
      capacity: 15,
      current_occupancy: 14,
      utilization: 93,
      scheduled_arrivals: 5,
      scheduled_departures: 1,
      average_turnaround: "3.2 hours",
      ai_efficiency_score: 72,
      congestion_level: "High",
      next_available_slot: "2024-01-15 16:00",
      ai_recommendations: ["Redirect 2 vehicles to alternate dock", "Implement priority queuing"],
      active_operations: [
        { vehicle: "TRK007", operation: "Waiting", eta_completion: "15:30", progress: 0 },
        { vehicle: "TRK008", operation: "Loading", eta_completion: "15:45", progress: 40 },
        { vehicle: "TRK009", operation: "Unloading", eta_completion: "16:30", progress: 25 }
      ]
    },
    {
      id: "DOCK003",
      name: "Chennai Port Dock",
      status: "Optimal",
      capacity: 10,
      current_occupancy: 6,
      utilization: 60,
      scheduled_arrivals: 2,
      scheduled_departures: 3,
      average_turnaround: "2.1 hours",
      ai_efficiency_score: 92,
      congestion_level: "Low",
      next_available_slot: "2024-01-15 13:00",
      ai_recommendations: ["Operating at optimal efficiency", "Consider accepting overflow from other docks"],
      active_operations: [
        { vehicle: "TRK010", operation: "Loading", eta_completion: "13:15", progress: 75 },
        { vehicle: "TRK011", operation: "Unloading", eta_completion: "13:45", progress: 50 }
      ]
    }
  ],
  operational_metrics: {
    real_time_efficiency: 87,
    exception_resolution_time: "45 minutes",
    automated_decisions: 156,
    manual_interventions: 23,
    ai_accuracy: 94,
    cost_savings_today: 15600,
    performance_improvement: 18
  },
  tracking_analytics: {
    total_shipments_tracked: 1247,
    prediction_accuracy: 91,
    anomalies_detected: 12,
    proactive_alerts_sent: 89,
    eta_variance: "±8 minutes",
    customer_satisfaction: 4.6
  },
  analytics_data: {
    transport_order_analytics: {
      total_orders: 1247,
      completed_orders: 1156,
      in_progress_orders: 68,
      cancelled_orders: 23,
      completion_rate: 92.7,
      average_delivery_time: "18.5 hours",
      on_time_delivery_rate: 94.2,
      cost_per_order: 15420,
      revenue_per_order: 18950,
      profit_margin: 18.6,
      ai_optimization_impact: 23.4,
      trend_analysis: {
        weekly_growth: 8.5,
        monthly_growth: 15.2,
        efficiency_improvement: 12.8,
        cost_reduction: 9.7
      },
      performance_insights: [
        { metric: "Delivery Speed", improvement: "+15%", ai_contribution: "Route optimization" },
        { metric: "Cost Efficiency", improvement: "+23%", ai_contribution: "Load consolidation" },
        { metric: "Customer Satisfaction", improvement: "+18%", ai_contribution: "Predictive ETAs" },
        { metric: "Exception Resolution", improvement: "+35%", ai_contribution: "Automated handling" }
      ]
    },
    carrier_performance: [
      {
        id: "CAR001",
        name: "FastLogistics",
        total_shipments: 342,
        on_time_deliveries: 324,
        on_time_rate: 94.7,
        average_cost: 14200,
        damage_incidents: 3,
        damage_rate: 0.88,
        ai_performance_score: 87,
        reliability_trend: "improving",
        cost_efficiency_score: 78,
        customer_rating: 4.3,
        ai_recommendations: ["Increase volume allocation", "Negotiate better rates"],
        performance_trends: {
          last_30_days: { on_time: 96.2, cost_efficiency: 82, satisfaction: 4.4 },
          last_90_days: { on_time: 94.7, cost_efficiency: 78, satisfaction: 4.3 },
          year_to_date: { on_time: 93.8, cost_efficiency: 76, satisfaction: 4.2 }
        }
      },
      {
        id: "CAR002",
        name: "QuickDelivery",
        total_shipments: 298,
        on_time_deliveries: 287,
        on_time_rate: 96.3,
        average_cost: 13800,
        damage_incidents: 1,
        damage_rate: 0.34,
        ai_performance_score: 92,
        reliability_trend: "stable",
        cost_efficiency_score: 85,
        customer_rating: 4.6,
        ai_recommendations: ["Preferred partner status", "Expand service areas"],
        performance_trends: {
          last_30_days: { on_time: 97.1, cost_efficiency: 87, satisfaction: 4.7 },
          last_90_days: { on_time: 96.3, cost_efficiency: 85, satisfaction: 4.6 },
          year_to_date: { on_time: 95.8, cost_efficiency: 84, satisfaction: 4.5 }
        }
      },
      {
        id: "CAR003",
        name: "ReliableTransport",
        total_shipments: 187,
        on_time_deliveries: 156,
        on_time_rate: 83.4,
        average_cost: 15600,
        damage_incidents: 4,
        damage_rate: 2.14,
        ai_performance_score: 75,
        reliability_trend: "declining",
        cost_efficiency_score: 68,
        customer_rating: 3.8,
        ai_recommendations: ["Performance improvement plan", "Reduce dependency"],
        performance_trends: {
          last_30_days: { on_time: 81.2, cost_efficiency: 65, satisfaction: 3.6 },
          last_90_days: { on_time: 83.4, cost_efficiency: 68, satisfaction: 3.8 },
          year_to_date: { on_time: 85.1, cost_efficiency: 71, satisfaction: 4.0 }
        }
      }
    ],
    cost_analysis: {
      total_transport_cost: 19250000,
      cost_per_km: 45.2,
      fuel_costs: 7680000,
      labor_costs: 5420000,
      maintenance_costs: 2150000,
      insurance_costs: 1200000,
      other_costs: 2800000,
      ai_cost_savings: 4620000,
      cost_optimization_opportunities: [
        { category: "Route Optimization", potential_savings: 1250000, implementation_effort: "Low" },
        { category: "Load Consolidation", potential_savings: 980000, implementation_effort: "Medium" },
        { category: "Carrier Negotiation", potential_savings: 750000, implementation_effort: "High" },
        { category: "Fuel Efficiency", potential_savings: 650000, implementation_effort: "Medium" }
      ],
      cost_trends: {
        monthly_change: -8.5,
        quarterly_change: -15.2,
        yearly_projection: -18.7
      },
      cost_breakdown_by_route: [
        { route: "Mumbai-Delhi", cost: 54000, volume: 145, cost_per_shipment: 372 },
        { route: "Bangalore-Chennai", cost: 14700, volume: 89, cost_per_shipment: 165 },
        { route: "Delhi-Kolkata", cost: 72000, volume: 98, cost_per_shipment: 735 }
      ]
    },
    ai_impact_metrics: {
      automation_rate: 87,
      decision_accuracy: 94,
      cost_reduction_percentage: 24,
      efficiency_improvement: 31,
      customer_satisfaction_improvement: 18,
      exception_resolution_speed: 65,
      predictive_accuracy: 91
    }
  },
  settings_data: {
    user_preferences: {
      user_id: "USR001",
      name: "Abhijit Kumar",
      email: "abhijit.kumar@company.com",
      role: "Transport Manager",
      department: "Logistics",
      ai_assistance_level: "Advanced",
      notification_preferences: {
        email_notifications: true,
        sms_notifications: false,
        push_notifications: true,
        ai_recommendations: true,
        exception_alerts: true,
        performance_reports: true,
        cost_alerts: true,
        maintenance_reminders: true
      },
      dashboard_layout: "Advanced Analytics",
      theme: "Light",
      language: "English",
      timezone: "Asia/Kolkata",
      ai_personalization: {
        learning_enabled: true,
        auto_suggestions: true,
        predictive_insights: true,
        custom_recommendations: true,
        behavior_analysis: true
      },
      performance_preferences: {
        auto_refresh_interval: 30,
        data_retention_days: 90,
        chart_animation: true,
        real_time_updates: true
      }
    },
    system_configuration: {
      ai_models: [
        {
          id: "MODEL001",
          name: "Route Optimization Engine",
          type: "Optimization",
          status: "Active",
          accuracy: 94.2,
          last_trained: "2024-01-10",
          performance_score: 92,
          usage_count: 15420,
          confidence_threshold: 85,
          auto_retrain: true,
          training_frequency: "Weekly",
          data_sources: ["GPS", "Traffic", "Historical Routes"],
          optimization_target: "Cost & Time"
        },
        {
          id: "MODEL002",
          name: "Predictive Maintenance AI",
          type: "Prediction",
          status: "Active",
          accuracy: 89.7,
          last_trained: "2024-01-08",
          performance_score: 88,
          usage_count: 8950,
          confidence_threshold: 80,
          auto_retrain: true,
          training_frequency: "Bi-weekly",
          data_sources: ["Vehicle Sensors", "Maintenance History", "Usage Patterns"],
          optimization_target: "Maintenance Cost"
        },
        {
          id: "MODEL003",
          name: "Demand Forecasting Model",
          type: "Forecasting",
          status: "Training",
          accuracy: 91.5,
          last_trained: "2024-01-12",
          performance_score: 90,
          usage_count: 12340,
          confidence_threshold: 88,
          auto_retrain: true,
          training_frequency: "Monthly",
          data_sources: ["Historical Orders", "Market Trends", "Seasonal Data"],
          optimization_target: "Capacity Planning"
        },
        {
          id: "MODEL004",
          name: "Exception Detection System",
          type: "Classification",
          status: "Active",
          accuracy: 96.1,
          last_trained: "2024-01-11",
          performance_score: 95,
          usage_count: 6780,
          confidence_threshold: 90,
          auto_retrain: true,
          training_frequency: "Daily",
          data_sources: ["Real-time Tracking", "Sensor Data", "Historical Exceptions"],
          optimization_target: "Exception Prevention"
        }
      ],
      system_settings: {
        auto_backup: true,
        backup_frequency: "Daily",
        data_retention_policy: "2 years",
        security_level: "High",
        api_rate_limit: 1000,
        concurrent_users: 50,
        maintenance_window: "02:00-04:00 IST",
        performance_monitoring: true,
        error_logging: "Detailed",
        cache_duration: 3600
      },
      integration_settings: {
        erp_integration: {
          enabled: true,
          system: "SAP",
          sync_frequency: "Real-time",
          last_sync: "2024-01-15 09:30",
          status: "Connected"
        },
        gps_tracking: {
          enabled: true,
          provider: "GPS Pro",
          update_frequency: "30 seconds",
          accuracy: "High",
          status: "Active"
        },
        weather_api: {
          enabled: true,
          provider: "WeatherAPI",
          update_frequency: "1 hour",
          status: "Connected"
        },
        traffic_api: {
          enabled: true,
          provider: "Google Maps",
          update_frequency: "5 minutes",
          status: "Connected"
        }
      }
    },
    notification_management: {
      notification_rules: [
        {
          id: "RULE001",
          name: "High Priority Exceptions",
          type: "Exception Alert",
          condition: "Exception severity = High",
          channels: ["Email", "SMS", "Push"],
          recipients: ["Transport Manager", "Operations Team"],
          ai_priority_score: 95,
          frequency: "Immediate",
          enabled: true,
          created_date: "2024-01-01"
        },
        {
          id: "RULE002",
          name: "Cost Optimization Opportunities",
          type: "AI Recommendation",
          condition: "Potential savings > ₹50,000",
          channels: ["Email", "Dashboard"],
          recipients: ["Finance Team", "Transport Manager"],
          ai_priority_score: 85,
          frequency: "Daily",
          enabled: true,
          created_date: "2024-01-05"
        },
        {
          id: "RULE003",
          name: "Maintenance Predictions",
          type: "Predictive Alert",
          condition: "Maintenance probability > 80%",
          channels: ["Email", "Push"],
          recipients: ["Maintenance Team", "Fleet Manager"],
          ai_priority_score: 90,
          frequency: "As needed",
          enabled: true,
          created_date: "2024-01-03"
        },
        {
          id: "RULE004",
          name: "Performance Anomalies",
          type: "Performance Alert",
          condition: "Performance drop > 15%",
          channels: ["Dashboard", "Email"],
          recipients: ["Operations Team"],
          ai_priority_score: 80,
          frequency: "Real-time",
          enabled: true,
          created_date: "2024-01-07"
        }
      ],
      notification_history: [
        {
          id: "NOTIF001",
          type: "Exception Alert",
          title: "Vehicle TRK003 Exception",
          message: "Engine warning detected - immediate attention required",
          priority: "High",
          sent_time: "2024-01-15 09:15",
          status: "Delivered",
          recipients: 3,
          ai_generated: true
        },
        {
          id: "NOTIF002",
          type: "AI Recommendation",
          title: "Route Optimization Opportunity",
          message: "AI identified 23% cost reduction opportunity",
          priority: "Medium",
          sent_time: "2024-01-15 08:00",
          status: "Delivered",
          recipients: 2,
          ai_generated: true
        },
        {
          id: "NOTIF003",
          type: "Predictive Alert",
          title: "Maintenance Required",
          message: "Vehicle TRK001 requires maintenance in 3 days",
          priority: "Medium",
          sent_time: "2024-01-14 16:30",
          status: "Delivered",
          recipients: 2,
          ai_generated: true
        }
      ]
    },
    ai_model_management: {
      model_performance: {
        overall_accuracy: 92.6,
        total_predictions: 45670,
        successful_predictions: 42290,
        model_uptime: 99.8,
        average_response_time: "120ms",
        daily_usage: 1250,
        cost_savings_generated: 4620000,
        efficiency_improvement: 31
      },
      training_schedule: [
        {
          model_id: "MODEL001",
          next_training: "2024-01-22 02:00",
          estimated_duration: "2 hours",
          data_size: "15GB",
          training_type: "Incremental"
        },
        {
          model_id: "MODEL002",
          next_training: "2024-01-25 02:30",
          estimated_duration: "3 hours",
          data_size: "8GB",
          training_type: "Full Retrain"
        },
        {
          model_id: "MODEL003",
          next_training: "2024-02-01 03:00",
          estimated_duration: "4 hours",
          data_size: "22GB",
          training_type: "Full Retrain"
        }
      ],
      model_insights: [
        {
          model_id: "MODEL001",
          insight: "Route optimization accuracy improved by 3.2% after latest training",
          impact: "Additional ₹2.1L monthly savings",
          recommendation: "Increase training frequency to weekly",
          confidence: 94
        },
        {
          model_id: "MODEL002",
          insight: "Maintenance predictions showing seasonal patterns",
          impact: "15% reduction in unexpected breakdowns",
          recommendation: "Include weather data in training",
          confidence: 87
        },
        {
          model_id: "MODEL004",
          insight: "Exception detection accuracy at all-time high",
          impact: "35% faster exception resolution",
          recommendation: "Deploy to additional vehicle types",
          confidence: 96
        }
      ]
    }
  }
};

// DOM elements
const loginScreen = document.getElementById('login-screen');
const app = document.getElementById('app');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const contentArea = document.getElementById('content');
const navItems = document.querySelectorAll('.nav-item');
const themeToggle = document.getElementById('theme-toggle');
const logoutBtn = document.getElementById('logout');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  setupEventListeners();
  
  // Check if user is already logged in (for demo purposes)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (isLoggedIn) {
    showApp();
  }
});

// Event listeners
function setupEventListeners() {
  loginForm.addEventListener('submit', handleLogin);
  logoutBtn.addEventListener('click', handleLogout);
  themeToggle.addEventListener('click', toggleTheme);
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const view = e.target.dataset.view;
      navigateToView(view);
    });
  });
}

// Authentication functions
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple demo login - check for specific credentials
  if (email === 'demo@example.com' && password === 'password') {
    localStorage.setItem('isLoggedIn', 'true');
    loginError.classList.add('hidden');
    loginError.textContent = '';
    showApp();
  } else {
    loginError.textContent = 'Invalid credentials. Use demo@example.com and "password".';
    loginError.classList.remove('hidden');
  }
}

function handleLogout() {
  localStorage.removeItem('isLoggedIn');
  showLogin();
}

function showApp() {
  loginScreen.classList.add('hidden');
  app.classList.remove('hidden');
  navigateToView('dashboard');
}

function showLogin() {
  app.classList.add('hidden');
  loginScreen.classList.remove('hidden');
}

// Navigation
function navigateToView(view) {
  currentView = view;
  
  // Update active nav item
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.view === view) {
      item.classList.add('active');
    }
  });
  
  // Render the view content
  renderView(view);
}

// Theme toggling
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-color-scheme', currentTheme);
  themeToggle.textContent = currentTheme === 'light' ? '🌓 Theme' : '🌞 Theme';
}

// View rendering functions
function renderView(view) {
  contentArea.innerHTML = '';
  contentArea.classList.add('fade-in');
  
  setTimeout(() => {
    switch(view) {
      case 'dashboard':
        renderDashboard();
        break;
      case 'transport-management':
        renderTransportManagement();
        break;
      case 'transport-planning':
        renderTransportPlanning();
        break;
      case 'transport-execution':
        renderTransportExecution();
        break;
      case 'reviews-analytics':
        renderReviewsAnalytics();
        break;
      case 'settings':
        renderSettings();
        break;
    }
  }, 50);
}

// Dashboard view
function renderDashboard() {
  const html = `
    <div class="module-header">
      <div class="module-title">
        <h1>AI-Enhanced Dashboard</h1>
        <span class="ai-badge">AI Powered</span>
      </div>
      <p>Real-time insights and predictions powered by artificial intelligence</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">${mockData.performance_metrics.on_time_delivery}%</div>
        <div class="stat-label">On-Time Delivery</div>
        <div class="stat-trend positive">+5% from last month</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${mockData.performance_metrics.cost_reduction}%</div>
        <div class="stat-label">Cost Reduction</div>
        <div class="stat-trend positive">+12% from last quarter</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${mockData.performance_metrics.fuel_efficiency}%</div>
        <div class="stat-label">Fuel Efficiency</div>
        <div class="stat-trend positive">+8% improvement</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${mockData.performance_metrics.maintenance_prediction}%</div>
        <div class="stat-label">Maintenance Prediction</div>
        <div class="stat-trend positive">Accuracy improved</div>
      </div>
    </div>

    <div class="ai-recommendation">
      <h4>AI Recommendation</h4>
      <p>Based on current traffic patterns and historical data, rerouting 3 shipments through alternate routes could save an estimated 4.2 hours and $850 in fuel costs.</p>
      <button class="btn btn--primary btn--sm">Apply Recommendation</button>
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card__body">
          <h3>Vehicle Health Monitoring</h3>
          <div class="chart-container chart-small">
            <canvas id="vehicleHealthChart"></canvas>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card__body">
          <h3>Route Optimization Impact</h3>
          <div class="chart-container chart-small">
            <canvas id="routeOptimizationChart"></canvas>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card__body">
          <h3>Predictive Maintenance Alerts</h3>
          <div class="maintenance-alerts">
            ${mockData.vehicles.map(vehicle => `
              <div class="flex items-center justify-between py-8">
                <span>${vehicle.id}</span>
                <span class="health-score ${getHealthClass(vehicle.health_score)}">
                  ${vehicle.health_score}%
                </span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="card__body">
          <h3>Recent AI Insights</h3>
          <div class="insights">
            <div class="ai-insight">
              <h4>Traffic Pattern Analysis</h4>
              <p>Peak congestion predicted on Route RT001 between 2-4 PM today. Consider rescheduling.</p>
            </div>
            <div class="ai-insight">
              <h4>Demand Forecasting</h4>
              <p>15% increase in shipment volume expected next week. Recommend scaling up capacity.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  contentArea.innerHTML = html;
  
  // Initialize charts
  setTimeout(() => {
    createVehicleHealthChart();
    createRouteOptimizationChart();
  }, 100);
}

// Transport Management view
function renderTransportManagement() {
  const html = `
    <div class="module-header">
      <div class="module-title">
        <h1>Transport Management</h1>
        <span class="ai-badge">AI Enhanced</span>
      </div>
      <p>AI-powered transport package creation, vehicle management, and business partner optimization</p>
    </div>

    <div class="ai-recommendation">
      <h4>🤖 AI Package Optimization</h4>
      <p>Based on current inventory and shipping patterns, consolidating 5 packages into 3 optimized shipments could reduce costs by 22% and improve delivery efficiency.</p>
      <div class="recommendation-actions">
        <button class="btn btn--primary btn--sm" onclick="applyPackageOptimization()">Apply Optimization</button>
        <button class="btn btn--outline btn--sm" onclick="showOptimizationDetails()">View Details</button>
      </div>
    </div>

    <!-- Sub-module Navigation -->
    <div class="sub-nav">
      <button class="sub-nav-item active" onclick="showSubModule('vehicle-management', this)">Vehicle Management</button>
      <button class="sub-nav-item" onclick="showSubModule('product-master', this)">Product Master</button>
      <button class="sub-nav-item" onclick="showSubModule('business-partners', this)">Business Partners</button>
      <button class="sub-nav-item" onclick="showSubModule('package-creation', this)">Package Creation</button>
      <button class="sub-nav-item" onclick="showSubModule('master-data', this)">Master Data</button>
    </div>

    <!-- Vehicle Management Sub-module (Default) -->
    <div id="vehicle-management" class="sub-module active">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${mockData.vehicles.length}</div>
          <div class="stat-label">Total Vehicles</div>
          <div class="stat-trend positive">+2 this month</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(mockData.vehicles.reduce((sum, v) => sum + v.health_score, 0) / mockData.vehicles.length)}%</div>
          <div class="stat-label">Avg Health Score</div>
          <div class="stat-trend positive">+3% improvement</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.vehicles.filter(v => v.status === 'Active').length}</div>
          <div class="stat-label">Active Vehicles</div>
          <div class="stat-trend neutral">Stable</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">₹${mockData.vehicles.reduce((sum, v) => sum + v.maintenance_cost_prediction, 0).toLocaleString()}</div>
          <div class="stat-label">Predicted Maintenance Cost</div>
          <div class="stat-trend negative">-15% vs last quarter</div>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>🚛 AI-Enhanced Vehicle Fleet Status</h3>
          <div class="card-actions">
            <button class="btn btn--outline btn--sm" onclick="refreshVehicleData()">🔄 Refresh</button>
            <button class="btn btn--primary btn--sm" onclick="addNewVehicle()">+ Add Vehicle</button>
          </div>
        </div>
        <div class="card__body">
          <table class="data-table enhanced">
            <thead>
              <tr>
                <th>Vehicle ID</th>
                <th>Status</th>
                <th>Health Score</th>
                <th>Location</th>
                <th>Load Status</th>
                <th>Fuel Efficiency</th>
                <th>AI Predictions</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${mockData.vehicles.map(vehicle => `
                <tr class="vehicle-row" data-vehicle-id="${vehicle.id}">
                  <td>
                    <div class="vehicle-id">
                      <strong>${vehicle.id}</strong>
                      <small>Driver: ${vehicle.driver}</small>
                    </div>
                  </td>
                  <td><span class="status ${vehicle.status.toLowerCase()}">${vehicle.status}</span></td>
                  <td>
                    <div class="health-score-container">
                      <span class="health-score ${getHealthClass(vehicle.health_score)}">${vehicle.health_score}%</span>
                      <div class="health-bar">
                        <div class="health-fill" style="width: ${vehicle.health_score}%"></div>
                      </div>
                    </div>
                  </td>
                  <td>${vehicle.location}</td>
                  <td>
                    <div class="load-info">
                      <span>${vehicle.current_load}/${vehicle.cargo_capacity} kg</span>
                      <div class="load-bar">
                        <div class="load-fill" style="width: ${(vehicle.current_load/vehicle.cargo_capacity)*100}%"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="fuel-efficiency ${vehicle.fuel_efficiency > 7.5 ? 'good' : vehicle.fuel_efficiency > 6.5 ? 'average' : 'poor'}">
                      ${vehicle.fuel_efficiency} km/l
                    </span>
                  </td>
                  <td>
                    <div class="ai-predictions">
                      <div class="prediction-item">
                        <span class="prediction-label">Next Maintenance:</span>
                        <span class="prediction-value">${vehicle.next_maintenance}</span>
                      </div>
                      <div class="prediction-item">
                        <span class="prediction-label">Cost Estimate:</span>
                        <span class="prediction-value">₹${vehicle.maintenance_cost_prediction.toLocaleString()}</span>
                      </div>
                      <div class="prediction-item">
                        <span class="prediction-label">Risk Level:</span>
                        <span class="risk-level ${vehicle.downtime_risk.toLowerCase().replace(' ', '-')}">${vehicle.downtime_risk}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="action-buttons">
                      <button class="btn btn--sm btn--outline" onclick="viewVehicleDetails('${vehicle.id}')">👁️ View</button>
                      <button class="btn btn--sm btn--primary" onclick="scheduleMaintenanceAI('${vehicle.id}')">🔧 Schedule</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Product Master Sub-module -->
    <div id="product-master" class="sub-module">
      <div class="card">
        <div class="card__header">
          <h3>📦 AI-Powered Product Master</h3>
          <div class="card-actions">
            <button class="btn btn--outline btn--sm" onclick="runProductCategorization()">🤖 Auto-Categorize</button>
            <button class="btn btn--primary btn--sm" onclick="addNewProduct()">+ Add Product</button>
          </div>
        </div>
        <div class="card__body">
          <table class="data-table enhanced">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>AI Category</th>
                <th>Confidence</th>
                <th>Auto Description</th>
                <th>Packaging Rec.</th>
                <th>Risk Level</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${mockData.products.map(product => `
                <tr>
                  <td><strong>${product.id}</strong></td>
                  <td>${product.name}</td>
                  <td>
                    <span class="category-tag">${product.category}</span>
                  </td>
                  <td>
                    <div class="confidence-indicator">
                      <span class="confidence-value ${getConfidenceClass(product.ai_category_confidence)}">${product.ai_category_confidence}%</span>
                      <div class="confidence-bar">
                        <div class="confidence-fill" style="width: ${product.ai_category_confidence}%"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="description-preview">
                      ${product.auto_description.substring(0, 50)}...
                      <button class="btn-link" onclick="showFullDescription('${product.id}')">Read more</button>
                    </div>
                  </td>
                  <td>
                    <div class="packaging-rec">
                      <span class="packaging-type">${product.packaging_recommendation}</span>
                    </div>
                  </td>
                  <td>
                    <span class="risk-badge ${product.risk_level.toLowerCase()}">${product.risk_level}</span>
                  </td>
                  <td>
                    <div class="action-buttons">
                      <button class="btn btn--sm btn--outline" onclick="editProduct('${product.id}')">✏️ Edit</button>
                      <button class="btn btn--sm btn--primary" onclick="optimizeProduct('${product.id}')">🚀 Optimize</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Business Partners Sub-module -->
    <div id="business-partners" class="sub-module">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${mockData.carriers.length}</div>
          <div class="stat-label">Active Carriers</div>
          <div class="stat-trend positive">+1 this month</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(mockData.carriers.reduce((sum, c) => sum + c.ai_performance_score, 0) / mockData.carriers.length)}</div>
          <div class="stat-label">Avg AI Score</div>
          <div class="stat-trend positive">+5 points</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.carriers.filter(c => c.risk_assessment === 'Low' || c.risk_assessment === 'Very Low').length}</div>
          <div class="stat-label">Low Risk Partners</div>
          <div class="stat-trend positive">Improved</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(mockData.carriers.reduce((sum, c) => sum + c.on_time_delivery, 0) / mockData.carriers.length)}%</div>
          <div class="stat-label">Avg On-Time Delivery</div>
          <div class="stat-trend positive">+3%</div>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>🤝 AI-Enhanced Carrier Performance</h3>
          <div class="card-actions">
            <button class="btn btn--outline btn--sm" onclick="runCarrierAnalysis()">📊 Analyze All</button>
            <button class="btn btn--primary btn--sm" onclick="findNewCarriers()">🔍 Find Carriers</button>
          </div>
        </div>
        <div class="card__body">
          <table class="data-table enhanced">
            <thead>
              <tr>
                <th>Carrier</th>
                <th>AI Score</th>
                <th>Reliability</th>
                <th>Performance Metrics</th>
                <th>Risk Assessment</th>
                <th>AI Recommendation</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${mockData.carriers.map(carrier => `
                <tr>
                  <td>
                    <div class="carrier-info">
                      <strong>${carrier.name}</strong>
                      <small>ID: ${carrier.id}</small>
                    </div>
                  </td>
                  <td>
                    <div class="score-container">
                      <span class="ai-score ${getScoreClass(carrier.ai_performance_score)}">${carrier.ai_performance_score}</span>
                      <div class="score-bar">
                        <div class="score-fill" style="width: ${carrier.ai_performance_score}%"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="rating-container">
                      <span class="rating">${carrier.reliability_rating}/5</span>
                      <div class="stars">
                        ${'★'.repeat(Math.floor(carrier.reliability_rating))}${'☆'.repeat(5-Math.floor(carrier.reliability_rating))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="metrics-grid">
                      <div class="metric-item">
                        <span class="metric-label">On-Time:</span>
                        <span class="metric-value">${carrier.on_time_delivery}%</span>
                      </div>
                      <div class="metric-item">
                        <span class="metric-label">Cost Eff:</span>
                        <span class="metric-value">${carrier.cost_efficiency}%</span>
                      </div>
                      <div class="metric-item">
                        <span class="metric-label">Damage:</span>
                        <span class="metric-value">${carrier.damage_rate}%</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="risk-badge ${carrier.risk_assessment.toLowerCase().replace(' ', '-')}">${carrier.risk_assessment}</span>
                  </td>
                  <td>
                    <div class="recommendation-text">
                      ${carrier.ai_recommendation}
                    </div>
                  </td>
                  <td>
                    <div class="action-buttons">
                      <button class="btn btn--sm btn--outline" onclick="viewCarrierDetails('${carrier.id}')">📋 Details</button>
                      <button class="btn btn--sm btn--primary" onclick="optimizeContract('${carrier.id}')">📝 Optimize</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Package Creation Sub-module -->
    <div id="package-creation" class="sub-module">
      <div class="ai-recommendation">
        <h4>🎯 Smart Package Creation</h4>
        <p>AI suggests consolidating 3 shipments to Delhi into 1 optimized package, saving 35% on shipping costs and reducing delivery time by 6 hours.</p>
        <button class="btn btn--primary btn--sm" onclick="createOptimizedPackage()">Create Optimized Package</button>
      </div>

      <div class="feature-grid">
        <div class="feature-card interactive" onclick="startPackageOptimization()">
          <div class="feature-icon">📦</div>
          <h4>AI Package Optimization</h4>
          <p>Automatically optimize package dimensions, weight distribution, and consolidation opportunities</p>
          <div class="feature-stats">
            <span class="stat">15-25% cost savings</span>
          </div>
        </div>

        <div class="feature-card interactive" onclick="startLoadConsolidation()">
          <div class="feature-icon">🔄</div>
          <h4>Intelligent Load Consolidation</h4>
          <p>AI identifies consolidation opportunities across shipments to maximize vehicle utilization</p>
          <div class="feature-stats">
            <span class="stat">20-30% efficiency gain</span>
          </div>
        </div>

        <div class="feature-card interactive" onclick="startDynamicSizing()">
          <div class="feature-icon">📏</div>
          <h4>Dynamic Package Sizing</h4>
          <p>Real-time analysis for optimal package sizing based on content and shipping method</p>
          <div class="feature-stats">
            <span class="stat">10-15% material savings</span>
          </div>
        </div>

        <div class="feature-card interactive" onclick="startMaterialSelection()">
          <div class="feature-icon">🛡️</div>
          <h4>Automated Material Selection</h4>
          <p>AI-driven selection of appropriate packaging materials based on product characteristics</p>
          <div class="feature-stats">
            <span class="stat">8-12% cost reduction</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Master Data Sub-module -->
    <div id="master-data" class="sub-module">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">98.5%</div>
          <div class="stat-label">Data Quality Score</div>
          <div class="stat-trend positive">+2.3% this month</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">1,247</div>
          <div class="stat-label">Records Cleaned</div>
          <div class="stat-trend positive">Auto-processed</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">23</div>
          <div class="stat-label">Validation Errors</div>
          <div class="stat-trend negative">-67% vs last week</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">5</div>
          <div class="stat-label">Maintenance Alerts</div>
          <div class="stat-trend neutral">Pending review</div>
        </div>
      </div>

      <div class="feature-grid">
        <div class="feature-card interactive" onclick="runDataQualityCheck()">
          <div class="feature-icon">🔍</div>
          <h4>AI Data Quality Management</h4>
          <p>Automated detection and correction of data inconsistencies and errors</p>
          <div class="feature-stats">
            <span class="stat">15-20% accuracy improvement</span>
          </div>
        </div>

        <div class="feature-card interactive" onclick="startDataCleansing()">
          <div class="feature-icon">🧹</div>
          <h4>Automated Data Cleansing</h4>
          <p>Machine learning algorithms for consistent data formatting and validation</p>
          <div class="feature-stats">
            <span class="stat">12-18% efficiency gain</span>
          </div>
        </div>

        <div class="feature-card interactive" onclick="enableIntelligentValidation()">
          <div class="feature-icon">✅</div>
          <h4>Intelligent Data Validation</h4>
          <p>Real-time validation of data entries against business rules and patterns</p>
          <div class="feature-stats">
            <span class="stat">8-12% error reduction</span>
          </div>
        </div>

        <div class="feature-card interactive" onclick="setupPredictiveMaintenance()">
          <div class="feature-icon">🔮</div>
          <h4>Predictive Data Maintenance</h4>
          <p>Proactive identification of data maintenance needs before issues arise</p>
          <div class="feature-stats">
            <span class="stat">10-15% prevention rate</span>
          </div>
        </div>
      </div>
    </div>
  `;

  contentArea.innerHTML = html;

  // Initialize sub-module functionality
  setupTransportManagementInteractions();
}

// Transport Management helper functions
function setupTransportManagementInteractions() {
  // Set up sub-module navigation
  window.showSubModule = function(moduleId, clickedElement) {
    // Hide all sub-modules
    document.querySelectorAll('.sub-module').forEach(module => {
      module.classList.remove('active');
    });

    // Remove active class from all nav items
    document.querySelectorAll('.sub-nav-item').forEach(item => {
      item.classList.remove('active');
    });

    // Show selected module
    const targetModule = document.getElementById(moduleId);
    if (targetModule) {
      targetModule.classList.add('active');
    }

    // Add active class to clicked nav item
    if (clickedElement) {
      clickedElement.classList.add('active');
    }
  };

  // Package optimization functions
  window.applyPackageOptimization = function() {
    showNotification('🚀 Package optimization applied! Estimated savings: 22%', 'success');
  };

  window.showOptimizationDetails = function() {
    showModal('Package Optimization Details', `
      <div class="optimization-details">
        <h4>Consolidation Opportunities:</h4>
        <ul>
          <li>Mumbai → Delhi: 3 packages → 1 package (Save ₹2,500)</li>
          <li>Bangalore → Chennai: 2 packages → 1 package (Save ₹1,200)</li>
        </ul>
        <h4>Material Optimization:</h4>
        <ul>
          <li>Switch to eco-friendly packaging (Save 15%)</li>
          <li>Optimize box sizes (Save 8%)</li>
        </ul>
      </div>
    `);
  };

  // Vehicle management functions
  window.refreshVehicleData = function() {
    showNotification('🔄 Vehicle data refreshed', 'info');
  };

  window.addNewVehicle = function() {
    showModal('Add New Vehicle', `
      <form class="vehicle-form">
        <div class="form-group">
          <label>Vehicle ID:</label>
          <input type="text" placeholder="TRK004" required>
        </div>
        <div class="form-group">
          <label>Driver Name:</label>
          <input type="text" placeholder="Driver Name" required>
        </div>
        <div class="form-group">
          <label>Cargo Capacity (kg):</label>
          <input type="number" placeholder="15000" required>
        </div>
        <button type="submit" class="btn btn--primary">Add Vehicle</button>
      </form>
    `);
  };

  window.viewVehicleDetails = function(vehicleId) {
    const vehicle = mockData.vehicles.find(v => v.id === vehicleId);
    if (vehicle) {
      showModal(`Vehicle Details - ${vehicleId}`, `
        <div class="vehicle-details">
          <div class="detail-grid">
            <div class="detail-item">
              <label>Driver:</label>
              <span>${vehicle.driver}</span>
            </div>
            <div class="detail-item">
              <label>Location:</label>
              <span>${vehicle.location}</span>
            </div>
            <div class="detail-item">
              <label>Health Score:</label>
              <span class="health-score ${getHealthClass(vehicle.health_score)}">${vehicle.health_score}%</span>
            </div>
            <div class="detail-item">
              <label>Fuel Efficiency:</label>
              <span>${vehicle.fuel_efficiency} km/l</span>
            </div>
          </div>
          <div class="recommendations-section">
            <h4>AI Recommendations:</h4>
            <ul>
              ${vehicle.ai_recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
          <div class="alerts-section">
            <h4>Predictive Alerts:</h4>
            <ul>
              ${vehicle.predictive_alerts.map(alert => `<li>${alert}</li>`).join('')}
            </ul>
          </div>
        </div>
      `);
    }
  };

  window.scheduleMaintenanceAI = function(vehicleId) {
    const vehicle = mockData.vehicles.find(v => v.id === vehicleId);
    if (vehicle) {
      showModal(`AI Maintenance Scheduling - ${vehicleId}`, `
        <div class="maintenance-scheduling">
          <div class="ai-suggestion">
            <h4>🤖 AI Recommendation:</h4>
            <p>Based on vehicle health data and usage patterns, optimal maintenance window is:</p>
            <div class="suggested-date">
              <strong>${vehicle.next_maintenance}</strong>
            </div>
            <p>Estimated cost: <strong>₹${vehicle.maintenance_cost_prediction.toLocaleString()}</strong></p>
          </div>
          <form class="maintenance-form">
            <div class="form-group">
              <label>Preferred Date:</label>
              <input type="date" value="${vehicle.next_maintenance}">
            </div>
            <div class="form-group">
              <label>Service Type:</label>
              <select>
                <option>Preventive Maintenance</option>
                <option>Corrective Maintenance</option>
                <option>Emergency Repair</option>
              </select>
            </div>
            <button type="submit" class="btn btn--primary">Schedule Maintenance</button>
          </form>
        </div>
      `);
    }
  };

  // Product Master functions
  window.runProductCategorization = function() {
    showNotification('🤖 Running AI product categorization...', 'info');
    setTimeout(() => {
      showNotification('✅ Product categorization completed! 15 products auto-categorized with 95% confidence', 'success');
    }, 2000);
  };

  window.addNewProduct = function() {
    showModal('Add New Product', `
      <form class="product-form">
        <div class="form-group">
          <label>Product Name:</label>
          <input type="text" placeholder="Enter product name" required>
        </div>
        <div class="form-group">
          <label>Category (AI will suggest):</label>
          <input type="text" placeholder="AI will auto-categorize">
        </div>
        <div class="form-group">
          <label>Description:</label>
          <textarea placeholder="AI will generate description based on product name"></textarea>
        </div>
        <button type="submit" class="btn btn--primary">Add Product</button>
      </form>
    `);
  };

  window.showFullDescription = function(productId) {
    const product = mockData.products.find(p => p.id === productId);
    if (product) {
      showModal(`Product Description - ${product.name}`, `
        <div class="product-description">
          <h4>AI-Generated Description:</h4>
          <p>${product.auto_description}</p>
          <div class="confidence-info">
            <strong>AI Confidence:</strong> ${product.ai_category_confidence}%
          </div>
          <div class="packaging-info">
            <strong>Recommended Packaging:</strong> ${product.packaging_recommendation}
          </div>
          <div class="risk-info">
            <strong>Risk Level:</strong> <span class="risk-badge ${product.risk_level.toLowerCase()}">${product.risk_level}</span>
          </div>
        </div>
      `);
    }
  };

  window.editProduct = function(productId) {
    const product = mockData.products.find(p => p.id === productId);
    if (product) {
      showModal(`Edit Product - ${productId}`, `
        <form class="product-form">
          <div class="form-group">
            <label>Product Name:</label>
            <input type="text" value="${product.name}" required>
          </div>
          <div class="form-group">
            <label>Category:</label>
            <input type="text" value="${product.category}">
          </div>
          <div class="form-group">
            <label>Description:</label>
            <textarea>${product.auto_description}</textarea>
          </div>
          <button type="submit" class="btn btn--primary">Update Product</button>
        </form>
      `);
    }
  };

  window.optimizeProduct = function(productId) {
    showNotification(`🚀 Optimizing product ${productId} with AI recommendations...`, 'info');
    setTimeout(() => {
      showNotification('✅ Product optimization completed! Packaging efficiency improved by 12%', 'success');
    }, 1500);
  };

  // Carrier functions
  window.runCarrierAnalysis = function() {
    showNotification('📊 Running comprehensive carrier analysis...', 'info');
    setTimeout(() => {
      showNotification('✅ Carrier analysis completed! 2 optimization opportunities identified', 'success');
    }, 3000);
  };

  window.findNewCarriers = function() {
    showModal('AI Carrier Recommendations', `
      <div class="carrier-recommendations">
        <h4>🤖 AI-Recommended Carriers:</h4>
        <div class="recommended-carriers">
          <div class="carrier-suggestion">
            <h5>ExpressLogistics</h5>
            <p>Predicted AI Score: 89 | Estimated Cost Savings: 15%</p>
            <button class="btn btn--sm btn--primary">Contact Carrier</button>
          </div>
          <div class="carrier-suggestion">
            <h5>SwiftTransport</h5>
            <p>Predicted AI Score: 85 | Estimated Cost Savings: 12%</p>
            <button class="btn btn--sm btn--primary">Contact Carrier</button>
          </div>
        </div>
      </div>
    `);
  };

  window.viewCarrierDetails = function(carrierId) {
    const carrier = mockData.carriers.find(c => c.id === carrierId);
    if (carrier) {
      showModal(`Carrier Details - ${carrier.name}`, `
        <div class="carrier-details">
          <div class="detail-grid">
            <div class="detail-item">
              <label>AI Performance Score:</label>
              <span class="ai-score ${getScoreClass(carrier.ai_performance_score)}">${carrier.ai_performance_score}</span>
            </div>
            <div class="detail-item">
              <label>Reliability Rating:</label>
              <span>${carrier.reliability_rating}/5</span>
            </div>
            <div class="detail-item">
              <label>On-Time Delivery:</label>
              <span>${carrier.on_time_delivery}%</span>
            </div>
            <div class="detail-item">
              <label>Cost Efficiency:</label>
              <span>${carrier.cost_efficiency}%</span>
            </div>
          </div>
          <div class="recommendations-section">
            <h4>AI Recommendation:</h4>
            <p>${carrier.ai_recommendation}</p>
          </div>
          <div class="optimization-section">
            <h4>Contract Optimization Suggestions:</h4>
            <ul>
              ${carrier.contract_optimization_suggestions.map(suggestion => `<li>${suggestion}</li>`).join('')}
            </ul>
          </div>
        </div>
      `);
    }
  };

  window.optimizeContract = function(carrierId) {
    const carrier = mockData.carriers.find(c => c.id === carrierId);
    if (carrier) {
      showModal(`Contract Optimization - ${carrier.name}`, `
        <div class="contract-optimization">
          <div class="ai-suggestion">
            <h4>🤖 AI Contract Optimization:</h4>
            <ul>
              ${carrier.contract_optimization_suggestions.map(suggestion => `<li>${suggestion}</li>`).join('')}
            </ul>
            <p><strong>Estimated Annual Savings:</strong> ₹2,50,000</p>
          </div>
          <form class="contract-form">
            <div class="form-group">
              <label>Contract Duration (months):</label>
              <input type="number" value="12" min="6" max="36">
            </div>
            <div class="form-group">
              <label>Volume Commitment (shipments/month):</label>
              <input type="number" value="100" min="50">
            </div>
            <button type="submit" class="btn btn--primary">Optimize Contract</button>
          </form>
        </div>
      `);
    }
  };

  // Package Creation functions
  window.createOptimizedPackage = function() {
    showNotification('🎯 Creating optimized package with AI recommendations...', 'info');
    setTimeout(() => {
      showNotification('✅ Optimized package created! 35% cost savings achieved', 'success');
    }, 2000);
  };

  window.startPackageOptimization = function() {
    showModal('AI Package Optimization', `
      <div class="package-optimization">
        <h4>🤖 AI Analysis Results:</h4>
        <div class="optimization-results">
          <div class="result-item">
            <strong>Current Packages:</strong> 5 separate shipments
          </div>
          <div class="result-item">
            <strong>Optimized Packages:</strong> 3 consolidated shipments
          </div>
          <div class="result-item">
            <strong>Cost Savings:</strong> ₹15,000 (22%)
          </div>
          <div class="result-item">
            <strong>Time Savings:</strong> 4.2 hours
          </div>
        </div>
        <button class="btn btn--primary" onclick="applyPackageOptimization()">Apply Optimization</button>
      </div>
    `);
  };

  window.startLoadConsolidation = function() {
    showModal('Intelligent Load Consolidation', `
      <div class="load-consolidation">
        <h4>🔄 Consolidation Opportunities:</h4>
        <div class="consolidation-list">
          <div class="consolidation-item">
            <strong>Route:</strong> Mumbai → Delhi<br>
            <strong>Current:</strong> 3 separate loads (60% utilization)<br>
            <strong>Optimized:</strong> 1 consolidated load (95% utilization)<br>
            <strong>Savings:</strong> ₹8,500
          </div>
          <div class="consolidation-item">
            <strong>Route:</strong> Bangalore → Chennai<br>
            <strong>Current:</strong> 2 separate loads (70% utilization)<br>
            <strong>Optimized:</strong> 1 consolidated load (90% utilization)<br>
            <strong>Savings:</strong> ₹3,200
          </div>
        </div>
        <button class="btn btn--primary">Apply Consolidation</button>
      </div>
    `);
  };

  window.startDynamicSizing = function() {
    showModal('Dynamic Package Sizing', `
      <div class="dynamic-sizing">
        <h4>📏 AI Sizing Recommendations:</h4>
        <div class="sizing-recommendations">
          <div class="size-rec">
            <strong>Electronics Package:</strong><br>
            Current: 40x30x20 cm<br>
            Optimized: 35x25x18 cm<br>
            Material Savings: 15%
          </div>
          <div class="size-rec">
            <strong>Textile Package:</strong><br>
            Current: 60x40x30 cm<br>
            Optimized: 55x35x25 cm<br>
            Material Savings: 12%
          </div>
        </div>
        <button class="btn btn--primary">Apply Sizing</button>
      </div>
    `);
  };

  window.startMaterialSelection = function() {
    showModal('Automated Material Selection', `
      <div class="material-selection">
        <h4>🛡️ AI Material Recommendations:</h4>
        <div class="material-recommendations">
          <div class="material-rec">
            <strong>Electronics:</strong> Anti-static bubble wrap + reinforced cardboard<br>
            <strong>Cost Impact:</strong> +₹50 per package<br>
            <strong>Damage Reduction:</strong> 85%
          </div>
          <div class="material-rec">
            <strong>Pharmaceuticals:</strong> Insulated containers + temperature sensors<br>
            <strong>Cost Impact:</strong> +₹200 per package<br>
            <strong>Compliance:</strong> 100% cold chain maintained
          </div>
        </div>
        <button class="btn btn--primary">Apply Material Selection</button>
      </div>
    `);
  };

  // Master Data functions
  window.runDataQualityCheck = function() {
    showNotification('🔍 Running comprehensive data quality analysis...', 'info');
    setTimeout(() => {
      showNotification('✅ Data quality check completed! 98.5% quality score achieved', 'success');
    }, 3000);
  };

  window.startDataCleansing = function() {
    showModal('Automated Data Cleansing', `
      <div class="data-cleansing">
        <h4>🧹 AI Data Cleansing Results:</h4>
        <div class="cleansing-results">
          <div class="result-stat">
            <strong>Records Processed:</strong> 1,247
          </div>
          <div class="result-stat">
            <strong>Duplicates Removed:</strong> 23
          </div>
          <div class="result-stat">
            <strong>Format Standardized:</strong> 156
          </div>
          <div class="result-stat">
            <strong>Missing Data Filled:</strong> 89
          </div>
        </div>
        <button class="btn btn--primary">Apply Cleansing</button>
      </div>
    `);
  };

  window.enableIntelligentValidation = function() {
    showNotification('✅ Intelligent data validation enabled! Real-time validation active', 'success');
  };

  window.setupPredictiveMaintenance = function() {
    showModal('Predictive Data Maintenance Setup', `
      <div class="predictive-maintenance">
        <h4>🔮 Predictive Maintenance Configuration:</h4>
        <form class="maintenance-config">
          <div class="form-group">
            <label>Monitoring Frequency:</label>
            <select>
              <option>Real-time</option>
              <option>Hourly</option>
              <option>Daily</option>
            </select>
          </div>
          <div class="form-group">
            <label>Alert Threshold:</label>
            <input type="range" min="70" max="95" value="85">
            <span>85% confidence</span>
          </div>
          <div class="form-group">
            <label>Auto-fix Minor Issues:</label>
            <input type="checkbox" checked>
          </div>
          <button type="submit" class="btn btn--primary">Enable Predictive Maintenance</button>
        </form>
      </div>
    `);
  };
}

// Transport Planning helper functions
function setupTransportPlanningInteractions() {
  // Set up sub-module navigation for planning
  window.showPlanningSubModule = function(moduleId, clickedElement) {
    // Hide all sub-modules
    document.querySelectorAll('.sub-module').forEach(module => {
      module.classList.remove('active');
    });

    // Remove active class from all nav items
    document.querySelectorAll('.sub-nav-item').forEach(item => {
      item.classList.remove('active');
    });

    // Show selected module
    const targetModule = document.getElementById(moduleId);
    if (targetModule) {
      targetModule.classList.add('active');
    }

    // Add active class to clicked nav item
    if (clickedElement) {
      clickedElement.classList.add('active');
    }
  };

  // Route optimization functions
  window.applyRouteOptimization = function() {
    showNotification('🚀 Applying all route optimizations...', 'info');
    setTimeout(() => {
      showNotification('✅ Route optimization completed! 5.5 hours saved, 18% fuel cost reduction', 'success');
    }, 2000);
  };

  window.viewOptimizationDetails = function() {
    showModal('Route Optimization Details', `
      <div class="optimization-details">
        <h4>🗺️ Optimization Results:</h4>
        <div class="optimization-list">
          ${mockData.routes.map(route => `
            <div class="optimization-item">
              <strong>${route.id}: ${route.origin} → ${route.destination}</strong><br>
              <span>Time Saved: ${route.savings}</span><br>
              <span>Fuel Saved: ${route.fuel_savings}</span><br>
              <span>AI Confidence: ${route.ai_confidence}%</span>
            </div>
          `).join('')}
        </div>
        <div class="total-savings">
          <h4>Total Impact:</h4>
          <p><strong>Time Savings:</strong> 5.5 hours daily</p>
          <p><strong>Cost Savings:</strong> ₹8,850 daily</p>
          <p><strong>Fuel Efficiency:</strong> 18% improvement</p>
        </div>
      </div>
    `);
  };

  // Capacity planning functions
  window.refreshCapacityData = function() {
    showNotification('🔄 Refreshing capacity data...', 'info');
    setTimeout(() => {
      showNotification('✅ Capacity data updated with latest metrics', 'success');
    }, 1500);
  };

  window.runCapacityAnalysis = function() {
    showModal('AI Capacity Analysis', `
      <div class="capacity-analysis">
        <h4>📈 Capacity Analysis Results:</h4>
        <div class="analysis-results">
          <div class="result-section">
            <h5>Current Status:</h5>
            <ul>
              <li>Vehicle Utilization: 78%</li>
              <li>Driver Availability: 85%</li>
              <li>Route Efficiency: 92%</li>
            </ul>
          </div>
          <div class="result-section">
            <h5>Predictions:</h5>
            <ul>
              <li>Peak demand: Next Tuesday 2-4 PM</li>
              <li>Capacity shortage risk: Medium</li>
              <li>Recommended action: Add 2 vehicles</li>
            </ul>
          </div>
          <div class="result-section">
            <h5>Optimization Opportunities:</h5>
            <ul>
              <li>Redistribute 3 routes for better balance</li>
              <li>Adjust driver schedules for peak hours</li>
              <li>Consider outsourcing 15% of overflow</li>
            </ul>
          </div>
        </div>
        <button class="btn btn--primary" onclick="implementCapacityOptimization()">Implement Recommendations</button>
      </div>
    `);
  };

  window.implementCapacityOptimization = function() {
    showNotification('🎯 Implementing capacity optimization recommendations...', 'info');
    setTimeout(() => {
      showNotification('✅ Capacity optimization applied! 12% efficiency improvement expected', 'success');
    }, 2500);
  };

  // Route management functions
  window.recalculateRoutes = function() {
    showNotification('🔄 Recalculating all routes with latest data...', 'info');
    setTimeout(() => {
      showNotification('✅ Route recalculation completed! 3 new optimizations found', 'success');
    }, 3000);
  };

  window.addNewRoute = function() {
    showModal('Add New Route', `
      <form class="route-form">
        <div class="form-group">
          <label>Origin:</label>
          <input type="text" placeholder="Enter origin city" required>
        </div>
        <div class="form-group">
          <label>Destination:</label>
          <input type="text" placeholder="Enter destination city" required>
        </div>
        <div class="form-group">
          <label>Priority Level:</label>
          <select>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
        <div class="form-group">
          <label>Vehicle Type:</label>
          <select>
            <option>Heavy Truck</option>
            <option>Medium Truck</option>
            <option>Light Vehicle</option>
          </select>
        </div>
        <button type="submit" class="btn btn--primary">Create Route</button>
      </form>
    `);
  };

  window.viewRouteDetails = function(routeId) {
    const route = mockData.routes.find(r => r.id === routeId);
    if (route) {
      showModal(`Route Details - ${routeId}`, `
        <div class="route-details">
          <div class="detail-grid">
            <div class="detail-item">
              <label>Origin:</label>
              <span>${route.origin}</span>
            </div>
            <div class="detail-item">
              <label>Destination:</label>
              <span>${route.destination}</span>
            </div>
            <div class="detail-item">
              <label>Distance:</label>
              <span>${route.distance} km</span>
            </div>
            <div class="detail-item">
              <label>Optimized Time:</label>
              <span>${route.optimized_time}</span>
            </div>
            <div class="detail-item">
              <label>Time Savings:</label>
              <span class="positive">${route.savings}</span>
            </div>
            <div class="detail-item">
              <label>Fuel Savings:</label>
              <span class="positive">${route.fuel_savings}</span>
            </div>
            <div class="detail-item">
              <label>AI Confidence:</label>
              <span class="confidence-value ${getConfidenceClass(route.ai_confidence)}">${route.ai_confidence}%</span>
            </div>
            <div class="detail-item">
              <label>Weather Impact:</label>
              <span class="weather-impact ${route.weather_impact.toLowerCase()}">${route.weather_impact}</span>
            </div>
          </div>
          <div class="route-map">
            <h4>🗺️ Route Visualization:</h4>
            <p>Interactive map would be displayed here showing optimized route with traffic conditions, weather data, and alternative paths.</p>
          </div>
        </div>
      `);
    }
  };

  window.optimizeRoute = function(routeId) {
    const route = mockData.routes.find(r => r.id === routeId);
    if (route) {
      showModal(`Optimize Route - ${routeId}`, `
        <div class="route-optimization">
          <div class="ai-suggestion">
            <h4>🤖 AI Optimization Analysis:</h4>
            <p>Current route efficiency: ${route.ai_confidence}%</p>
            <p>Potential improvements identified:</p>
            <ul>
              <li>Alternative route could save additional ${Math.floor(Math.random() * 30 + 10)} minutes</li>
              <li>Traffic pattern optimization available</li>
              <li>Weather-based timing adjustment recommended</li>
            </ul>
          </div>
          <div class="optimization-options">
            <h4>Optimization Options:</h4>
            <div class="option-group">
              <input type="checkbox" id="traffic-opt" checked>
              <label for="traffic-opt">Real-time traffic optimization</label>
            </div>
            <div class="option-group">
              <input type="checkbox" id="weather-opt" checked>
              <label for="weather-opt">Weather-based route adjustment</label>
            </div>
            <div class="option-group">
              <input type="checkbox" id="fuel-opt" checked>
              <label for="fuel-opt">Fuel efficiency optimization</label>
            </div>
          </div>
          <button class="btn btn--primary" onclick="applyRouteOptimization('${routeId}')">Apply Optimization</button>
        </div>
      `);
    }
  };

  // Order Planning functions
  window.rebalanceOrders = function() {
    showNotification('⚖️ Rebalancing orders with AI optimization...', 'info');
    setTimeout(() => {
      showNotification('✅ Order rebalancing completed! Load distribution optimized', 'success');
    }, 2500);
  };

  window.createNewOrder = function() {
    showModal('Create New Transport Order', `
      <form class="order-form">
        <div class="form-group">
          <label>Customer:</label>
          <input type="text" placeholder="Customer name" required>
        </div>
        <div class="form-group">
          <label>Pickup Location:</label>
          <input type="text" placeholder="Pickup city" required>
        </div>
        <div class="form-group">
          <label>Delivery Location:</label>
          <input type="text" placeholder="Delivery city" required>
        </div>
        <div class="form-group">
          <label>Cargo Type:</label>
          <select>
            <option>Electronics</option>
            <option>Textiles</option>
            <option>Pharmaceuticals</option>
            <option>General</option>
            <option>Machinery</option>
          </select>
        </div>
        <div class="form-group">
          <label>Weight (kg):</label>
          <input type="number" placeholder="Load weight" required>
        </div>
        <div class="form-group">
          <label>Pickup Date:</label>
          <input type="datetime-local" required>
        </div>
        <button type="submit" class="btn btn--primary">Create Order</button>
      </form>
    `);
  };

  window.viewOrderDetails = function(orderId) {
    const order = mockData.transport_orders.find(o => o.id === orderId);
    if (order) {
      showModal(`Order Details - ${orderId}`, `
        <div class="order-details">
          <div class="detail-grid">
            <div class="detail-item">
              <label>Customer:</label>
              <span>${order.customer}</span>
            </div>
            <div class="detail-item">
              <label>Route:</label>
              <span>${order.pickup_location} → ${order.delivery_location}</span>
            </div>
            <div class="detail-item">
              <label>Cargo Type:</label>
              <span>${order.cargo_type}</span>
            </div>
            <div class="detail-item">
              <label>Weight:</label>
              <span>${order.load_weight} kg</span>
            </div>
            <div class="detail-item">
              <label>AI Priority Score:</label>
              <span class="priority-score ${getScoreClass(order.ai_priority_score)}">${order.ai_priority_score}</span>
            </div>
            <div class="detail-item">
              <label>Delivery Confidence:</label>
              <span class="confidence-value ${getConfidenceClass(order.delivery_confidence)}">${order.delivery_confidence}%</span>
            </div>
            <div class="detail-item">
              <label>Cost Estimate:</label>
              <span>${order.cost_estimate}</span>
            </div>
            <div class="detail-item">
              <label>Profit Margin:</label>
              <span class="positive">${order.profit_margin}%</span>
            </div>
          </div>
          <div class="recommendations-section">
            <h4>🤖 AI Recommendations:</h4>
            <ul>
              ${order.ai_recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
          <div class="risk-section">
            <h4>⚠️ Risk Factors:</h4>
            <ul>
              ${order.risk_factors.map(risk => `<li>${risk}</li>`).join('')}
            </ul>
          </div>
        </div>
      `);
    }
  };

  window.optimizeOrder = function(orderId) {
    const order = mockData.transport_orders.find(o => o.id === orderId);
    if (order) {
      showModal(`Optimize Order - ${orderId}`, `
        <div class="order-optimization">
          <div class="ai-suggestion">
            <h4>🎯 AI Optimization Suggestions:</h4>
            <div class="optimization-suggestions">
              <div class="suggestion-item">
                <strong>Route Optimization:</strong>
                <p>Switch to Route RT002 for 15% cost reduction</p>
              </div>
              <div class="suggestion-item">
                <strong>Vehicle Assignment:</strong>
                <p>Reassign to ${order.assigned_vehicle === 'TRK001' ? 'TRK002' : 'TRK001'} for better utilization</p>
              </div>
              <div class="suggestion-item">
                <strong>Timing Optimization:</strong>
                <p>Delay pickup by 2 hours to avoid traffic, save ₹1,200</p>
              </div>
            </div>
            <div class="optimization-impact">
              <h5>Expected Impact:</h5>
              <p><strong>Cost Savings:</strong> ₹3,500 (6.5%)</p>
              <p><strong>Time Savings:</strong> 45 minutes</p>
              <p><strong>Delivery Confidence:</strong> +3%</p>
            </div>
          </div>
          <button class="btn btn--primary" onclick="applyOrderOptimization('${orderId}')">Apply Optimization</button>
        </div>
      `);
    }
  };

  window.applyOrderOptimization = function(orderId) {
    showNotification(`🎯 Applying optimization for order ${orderId}...`, 'info');
    setTimeout(() => {
      showNotification('✅ Order optimization applied! 6.5% cost savings achieved', 'success');
    }, 2000);
  };

  // Spot Auction functions
  window.refreshAuctions = function() {
    showNotification('🔄 Refreshing auction data...', 'info');
    setTimeout(() => {
      showNotification('✅ Auction data updated with latest bids and market conditions', 'success');
    }, 1500);
  };

  window.enableAutoBidding = function() {
    showModal('Enable AI Auto-Bidding', `
      <div class="auto-bidding-setup">
        <h4>🤖 AI Auto-Bidding Configuration:</h4>
        <form class="auto-bid-form">
          <div class="form-group">
            <label>Minimum Win Probability:</label>
            <input type="range" min="30" max="90" value="60" id="min-probability">
            <span id="probability-value">60%</span>
          </div>
          <div class="form-group">
            <label>Maximum Bid Amount:</label>
            <input type="number" placeholder="₹50,000" required>
          </div>
          <div class="form-group">
            <label>Preferred Cargo Types:</label>
            <div class="checkbox-group">
              <input type="checkbox" id="electronics" checked>
              <label for="electronics">Electronics</label>
              <input type="checkbox" id="general" checked>
              <label for="general">General</label>
              <input type="checkbox" id="machinery">
              <label for="machinery">Machinery</label>
            </div>
          </div>
          <div class="form-group">
            <label>Auto-bid when competition level is:</label>
            <select>
              <option>Low (1-3)</option>
              <option>Medium (4-6)</option>
              <option>High (7-10)</option>
            </select>
          </div>
          <button type="submit" class="btn btn--primary">Enable Auto-Bidding</button>
        </form>
      </div>
    `);
  };

  window.viewAuctionDetails = function(auctionId) {
    const auction = mockData.spot_auctions.find(a => a.id === auctionId);
    if (auction) {
      showModal(`Auction Details - ${auctionId}`, `
        <div class="auction-details">
          <div class="detail-grid">
            <div class="detail-item">
              <label>Route:</label>
              <span>${auction.route}</span>
            </div>
            <div class="detail-item">
              <label>Distance:</label>
              <span>${auction.distance} km</span>
            </div>
            <div class="detail-item">
              <label>Cargo Type:</label>
              <span>${auction.cargo_type}</span>
            </div>
            <div class="detail-item">
              <label>Weight:</label>
              <span>${auction.weight} kg</span>
            </div>
            <div class="detail-item">
              <label>Current Bid:</label>
              <span>${auction.current_bid}</span>
            </div>
            <div class="detail-item">
              <label>AI Suggested Bid:</label>
              <span>${auction.ai_suggested_bid}</span>
            </div>
            <div class="detail-item">
              <label>Market Demand:</label>
              <span class="demand-level ${auction.market_demand.toLowerCase().replace(' ', '-')}">${auction.market_demand}</span>
            </div>
            <div class="detail-item">
              <label>Competition Level:</label>
              <span>${auction.competition_level}/10</span>
            </div>
          </div>
          <div class="market-analysis">
            <h4>📊 Market Analysis:</h4>
            <p><strong>Win Probability:</strong> ${auction.win_probability}%</p>
            <p><strong>Profit Estimate:</strong> ${auction.profit_estimate}</p>
            <p><strong>Competitor Count:</strong> ${auction.carrier_count}</p>
            <p><strong>Bidding Deadline:</strong> ${auction.bidding_deadline}</p>
          </div>
          <div class="ai-recommendation">
            <h4>🤖 AI Recommendation:</h4>
            <p>${auction.ai_recommendation}</p>
          </div>
        </div>
      `);
    }
  };

  window.placeBid = function(auctionId) {
    const auction = mockData.spot_auctions.find(a => a.id === auctionId);
    if (auction) {
      showModal(`Place Bid - ${auctionId}`, `
        <div class="bid-placement">
          <div class="auction-summary">
            <h4>📋 Auction Summary:</h4>
            <p><strong>Route:</strong> ${auction.route}</p>
            <p><strong>Current Bid:</strong> ${auction.current_bid}</p>
            <p><strong>AI Suggested:</strong> ${auction.ai_suggested_bid}</p>
            <p><strong>Win Probability:</strong> ${auction.win_probability}%</p>
          </div>
          <form class="bid-form">
            <div class="form-group">
              <label>Your Bid Amount:</label>
              <input type="number" value="${auction.ai_suggested_bid.replace('₹', '').replace(',', '')}" required>
            </div>
            <div class="form-group">
              <label>Bid Strategy:</label>
              <select>
                <option>Follow AI Recommendation</option>
                <option>Conservative Bidding</option>
                <option>Aggressive Bidding</option>
                <option>Custom Strategy</option>
              </select>
            </div>
            <div class="bid-impact">
              <h5>Expected Impact:</h5>
              <p><strong>Win Probability:</strong> ${auction.win_probability}%</p>
              <p><strong>Estimated Profit:</strong> ${auction.profit_estimate}</p>
            </div>
            <button type="submit" class="btn btn--primary">Place Bid</button>
          </form>
        </div>
      `);
    }
  };

  window.acceptAIBid = function(auctionId) {
    const auction = mockData.spot_auctions.find(a => a.id === auctionId);
    if (auction) {
      showNotification(`💰 Placing AI-recommended bid of ${auction.ai_suggested_bid} for ${auctionId}...`, 'info');
      setTimeout(() => {
        showNotification('✅ Bid placed successfully! Monitoring auction status', 'success');
      }, 2000);
    }
  };

  window.customizeBid = function(auctionId) {
    window.placeBid(auctionId);
  };
}

// Transport Execution helper functions
function setupTransportExecutionInteractions() {
  // Set up sub-module navigation for execution
  window.showExecutionSubModule = function(moduleId, clickedElement) {
    // Hide all sub-modules
    document.querySelectorAll('.sub-module').forEach(module => {
      module.classList.remove('active');
    });

    // Remove active class from all nav items
    document.querySelectorAll('.sub-nav-item').forEach(item => {
      item.classList.remove('active');
    });

    // Show selected module
    const targetModule = document.getElementById(moduleId);
    if (targetModule) {
      targetModule.classList.add('active');
    }

    // Add active class to clicked nav item
    if (clickedElement) {
      clickedElement.classList.add('active');
    }
  };

  // Exception handling functions
  window.handleException = function(orderId) {
    const order = mockData.execution_orders.find(o => o.id === orderId);
    if (order) {
      showModal(`Handle Exception - ${orderId}`, `
        <div class="exception-handling">
          <div class="exception-summary">
            <h4>🚨 Exception Summary:</h4>
            <p><strong>Order:</strong> ${order.order_id} - ${order.customer}</p>
            <p><strong>Vehicle:</strong> ${order.vehicle} (Driver: ${order.driver})</p>
            <p><strong>Current Status:</strong> ${order.status}</p>
          </div>
          <div class="exceptions-list">
            <h4>Active Exceptions:</h4>
            ${order.exceptions.map(exc => `
              <div class="exception-detail ${exc.severity.toLowerCase()}">
                <div class="exception-header">
                  <strong>${exc.type}</strong>
                  <span class="severity-badge ${exc.severity.toLowerCase()}">${exc.severity}</span>
                </div>
                <p>${exc.description}</p>
                <small>Reported at: ${exc.time}</small>
              </div>
            `).join('')}
          </div>
          <div class="ai-recommendations">
            <h4>🤖 AI Recommendations:</h4>
            <ul>
              ${order.ai_recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
          <div class="action-options">
            <h4>Available Actions:</h4>
            <div class="action-buttons-grid">
              <button class="btn btn--primary" onclick="deployBackupVehicle('${orderId}')">🚛 Deploy Backup</button>
              <button class="btn btn--outline" onclick="scheduleInspection('${orderId}')">🔧 Schedule Inspection</button>
              <button class="btn btn--outline" onclick="notifyCustomer('${orderId}')">📧 Notify Customer</button>
              <button class="btn btn--outline" onclick="escalateException('${orderId}')">⬆️ Escalate</button>
            </div>
          </div>
        </div>
      `);
    }
  };

  window.viewExceptionDetails = function(orderId) {
    const order = mockData.execution_orders.find(o => o.id === orderId);
    if (order) {
      showModal(`Exception Details - ${orderId}`, `
        <div class="exception-details">
          <div class="impact-analysis">
            <h4>📊 Impact Analysis:</h4>
            <div class="impact-metrics">
              <div class="impact-item">
                <span class="impact-label">Estimated Delay:</span>
                <span class="impact-value negative">3.5 hours</span>
              </div>
              <div class="impact-item">
                <span class="impact-label">Cost Impact:</span>
                <span class="impact-value negative">₹8,500</span>
              </div>
              <div class="impact-item">
                <span class="impact-label">Customer Impact:</span>
                <span class="impact-value negative">High</span>
              </div>
            </div>
          </div>
          <div class="resolution-timeline">
            <h4>⏱️ Resolution Timeline:</h4>
            <div class="timeline">
              <div class="timeline-item">
                <span class="timeline-time">Immediate</span>
                <span class="timeline-action">Deploy backup vehicle</span>
              </div>
              <div class="timeline-item">
                <span class="timeline-time">+30 min</span>
                <span class="timeline-action">Transfer cargo</span>
              </div>
              <div class="timeline-item">
                <span class="timeline-time">+1 hour</span>
                <span class="timeline-action">Resume journey</span>
              </div>
            </div>
          </div>
        </div>
      `);
    }
  };

  // Order management functions
  window.refreshOrderStatus = function() {
    showNotification('🔄 Refreshing order status...', 'info');
    setTimeout(() => {
      showNotification('✅ Order status updated with latest information', 'success');
    }, 1500);
  };

  window.enableAutoRefresh = function() {
    showNotification('⚡ Auto-refresh enabled! Updates every 30 seconds', 'success');
  };

  window.trackOrder = function(orderId) {
    const order = mockData.execution_orders.find(o => o.id === orderId);
    if (order) {
      showModal(`Track Order - ${orderId}`, `
        <div class="order-tracking">
          <div class="tracking-header">
            <h4>📍 Live Tracking: ${order.customer}</h4>
            <span class="tracking-status ${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span>
          </div>
          <div class="tracking-map">
            <div class="map-placeholder">
              <p>🗺️ Interactive map would be displayed here showing:</p>
              <ul>
                <li>Current location: ${order.current_location}</li>
                <li>Destination: ${order.destination}</li>
                <li>Optimized route with traffic conditions</li>
                <li>Real-time vehicle position</li>
              </ul>
            </div>
          </div>
          <div class="tracking-details">
            <div class="detail-grid">
              <div class="detail-item">
                <label>Progress:</label>
                <span>${order.progress}%</span>
              </div>
              <div class="detail-item">
                <label>ETA:</label>
                <span>${order.actual_eta_prediction}</span>
              </div>
              <div class="detail-item">
                <label>Confidence:</label>
                <span class="confidence-value ${getConfidenceClass(order.eta_confidence)}">${order.eta_confidence}%</span>
              </div>
              <div class="detail-item">
                <label>Cargo Condition:</label>
                <span>${order.cargo_condition}</span>
              </div>
            </div>
          </div>
        </div>
      `);
    }
  };

  window.manageOrder = function(orderId) {
    const order = mockData.execution_orders.find(o => o.id === orderId);
    if (order) {
      showModal(`Manage Order - ${orderId}`, `
        <div class="order-management">
          <div class="management-tabs">
            <button class="tab-btn active" onclick="showManagementTab('overview')">Overview</button>
            <button class="tab-btn" onclick="showManagementTab('actions')">Actions</button>
            <button class="tab-btn" onclick="showManagementTab('history')">History</button>
          </div>
          <div id="overview" class="tab-content active">
            <div class="order-overview">
              <div class="overview-grid">
                <div class="overview-item">
                  <label>Customer:</label>
                  <span>${order.customer}</span>
                </div>
                <div class="overview-item">
                  <label>Vehicle:</label>
                  <span>${order.vehicle}</span>
                </div>
                <div class="overview-item">
                  <label>Driver:</label>
                  <span>${order.driver}</span>
                </div>
                <div class="overview-item">
                  <label>Status:</label>
                  <span class="status ${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span>
                </div>
              </div>
            </div>
          </div>
          <div id="actions" class="tab-content">
            <div class="management-actions">
              <button class="btn btn--primary" onclick="updateOrderStatus('${orderId}')">Update Status</button>
              <button class="btn btn--outline" onclick="reassignVehicle('${orderId}')">Reassign Vehicle</button>
              <button class="btn btn--outline" onclick="modifyRoute('${orderId}')">Modify Route</button>
              <button class="btn btn--outline" onclick="contactDriver('${orderId}')">Contact Driver</button>
            </div>
          </div>
          <div id="history" class="tab-content">
            <div class="order-history">
              ${order.tracking_updates.map(update => `
                <div class="history-item">
                  <div class="history-time">${update.time}</div>
                  <div class="history-location">${update.location}</div>
                  <div class="history-status">${update.status}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `);
    }
  };

  // Dock Management functions
  window.optimizeDockSchedule = function() {
    showNotification('🎯 Optimizing dock schedules with AI...', 'info');
    setTimeout(() => {
      showNotification('✅ Dock schedule optimized! 25% efficiency improvement expected', 'success');
    }, 2500);
  };

  window.addDockSlot = function() {
    showModal('Add Dock Slot', `
      <form class="dock-slot-form">
        <div class="form-group">
          <label>Dock:</label>
          <select required>
            ${mockData.dock_operations.map(dock => `<option value="${dock.id}">${dock.name}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Vehicle ID:</label>
          <input type="text" placeholder="TRK001" required>
        </div>
        <div class="form-group">
          <label>Operation Type:</label>
          <select required>
            <option>Loading</option>
            <option>Unloading</option>
            <option>Inspection</option>
            <option>Maintenance</option>
          </select>
        </div>
        <div class="form-group">
          <label>Scheduled Time:</label>
          <input type="datetime-local" required>
        </div>
        <div class="form-group">
          <label>Estimated Duration (hours):</label>
          <input type="number" step="0.5" min="0.5" max="8" value="2" required>
        </div>
        <button type="submit" class="btn btn--primary">Schedule Slot</button>
      </form>
    `);
  };

  window.viewDockDetails = function(dockId) {
    const dock = mockData.dock_operations.find(d => d.id === dockId);
    if (dock) {
      showModal(`Dock Details - ${dock.name}`, `
        <div class="dock-details">
          <div class="dock-overview">
            <div class="detail-grid">
              <div class="detail-item">
                <label>Status:</label>
                <span class="dock-status ${dock.status.toLowerCase()}">${dock.status}</span>
              </div>
              <div class="detail-item">
                <label>Capacity:</label>
                <span>${dock.current_occupancy}/${dock.capacity}</span>
              </div>
              <div class="detail-item">
                <label>Utilization:</label>
                <span>${dock.utilization}%</span>
              </div>
              <div class="detail-item">
                <label>AI Efficiency Score:</label>
                <span class="ai-score ${getScoreClass(dock.ai_efficiency_score)}">${dock.ai_efficiency_score}</span>
              </div>
              <div class="detail-item">
                <label>Average Turnaround:</label>
                <span>${dock.average_turnaround}</span>
              </div>
              <div class="detail-item">
                <label>Congestion Level:</label>
                <span class="congestion-level ${dock.congestion_level.toLowerCase()}">${dock.congestion_level}</span>
              </div>
            </div>
          </div>
          <div class="dock-schedule">
            <h4>📅 Today's Schedule:</h4>
            <div class="schedule-timeline">
              ${dock.active_operations.map(op => `
                <div class="schedule-item">
                  <div class="schedule-time">${op.eta_completion}</div>
                  <div class="schedule-vehicle">${op.vehicle}</div>
                  <div class="schedule-operation">${op.operation}</div>
                  <div class="schedule-progress">
                    <div class="progress-bar small">
                      <div class="progress-fill" style="width: ${op.progress}%"></div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="dock-recommendations">
            <h4>🤖 AI Recommendations:</h4>
            <ul>
              ${dock.ai_recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
        </div>
      `);
    }
  };

  window.manageDock = function(dockId) {
    const dock = mockData.dock_operations.find(d => d.id === dockId);
    if (dock) {
      showModal(`Manage Dock - ${dock.name}`, `
        <div class="dock-management">
          <div class="management-options">
            <h4>Management Options:</h4>
            <div class="option-buttons">
              <button class="btn btn--primary" onclick="reassignOperations('${dockId}')">🔄 Reassign Operations</button>
              <button class="btn btn--outline" onclick="adjustCapacity('${dockId}')">📊 Adjust Capacity</button>
              <button class="btn btn--outline" onclick="scheduleMaintenance('${dockId}')">🔧 Schedule Maintenance</button>
              <button class="btn btn--outline" onclick="viewDockAnalytics('${dockId}')">📈 View Analytics</button>
            </div>
          </div>
          <div class="quick-actions">
            <h4>Quick Actions:</h4>
            <div class="action-grid">
              <button class="quick-action-btn" onclick="markDockAvailable('${dockId}')">
                <span class="action-icon">✅</span>
                <span class="action-text">Mark Available</span>
              </button>
              <button class="quick-action-btn" onclick="markDockBusy('${dockId}')">
                <span class="action-icon">🚫</span>
                <span class="action-text">Mark Busy</span>
              </button>
              <button class="quick-action-btn" onclick="emergencyEvacuation('${dockId}')">
                <span class="action-icon">🚨</span>
                <span class="action-text">Emergency</span>
              </button>
            </div>
          </div>
        </div>
      `);
    }
  };

  // Operations functions
  window.runEfficiencyAnalysis = function() {
    showModal('AI Efficiency Analysis', `
      <div class="efficiency-analysis">
        <h4>📈 Operational Efficiency Analysis:</h4>
        <div class="analysis-results">
          <div class="analysis-section">
            <h5>Current Performance:</h5>
            <ul>
              <li>Overall Efficiency: ${mockData.operational_metrics.real_time_efficiency}%</li>
              <li>Automation Rate: ${Math.round((mockData.operational_metrics.automated_decisions / (mockData.operational_metrics.automated_decisions + mockData.operational_metrics.manual_interventions)) * 100)}%</li>
              <li>Decision Accuracy: ${mockData.operational_metrics.ai_accuracy}%</li>
            </ul>
          </div>
          <div class="analysis-section">
            <h5>Improvement Opportunities:</h5>
            <ul>
              <li>Automate 12 additional manual processes</li>
              <li>Optimize resource allocation for 15% efficiency gain</li>
              <li>Implement predictive maintenance for 20% cost reduction</li>
            </ul>
          </div>
          <div class="analysis-section">
            <h5>Projected Impact:</h5>
            <ul>
              <li>Efficiency Improvement: +23%</li>
              <li>Cost Savings: ₹45,000/month</li>
              <li>Time Savings: 8 hours/day</li>
            </ul>
          </div>
        </div>
        <button class="btn btn--primary" onclick="implementEfficiencyRecommendations()">Implement Recommendations</button>
      </div>
    `);
  };

  window.optimizeWorkflow = function() {
    showNotification('🚀 Optimizing workflow with AI recommendations...', 'info');
    setTimeout(() => {
      showNotification('✅ Workflow optimization completed! 18% efficiency improvement achieved', 'success');
    }, 3000);
  };

  // Tracking functions
  window.refreshTracking = function() {
    showNotification('🔄 Refreshing tracking data...', 'info');
    setTimeout(() => {
      showNotification('✅ Tracking data updated with latest GPS and sensor information', 'success');
    }, 1500);
  };

  window.enablePredictiveMode = function() {
    showModal('Enable Predictive Tracking Mode', `
      <div class="predictive-mode-setup">
        <h4>🔮 Predictive Tracking Configuration:</h4>
        <div class="mode-description">
          <p>Predictive mode uses AI to forecast potential delays, route changes, and delivery issues before they occur.</p>
        </div>
        <form class="predictive-form">
          <div class="form-group">
            <label>Prediction Horizon:</label>
            <select>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>4 hours</option>
            </select>
          </div>
          <div class="form-group">
            <label>Alert Sensitivity:</label>
            <input type="range" min="1" max="10" value="7" id="sensitivity-range">
            <span id="sensitivity-value">High</span>
          </div>
          <div class="form-group">
            <label>Include Factors:</label>
            <div class="checkbox-group">
              <input type="checkbox" id="traffic" checked>
              <label for="traffic">Traffic Conditions</label>
              <input type="checkbox" id="weather" checked>
              <label for="weather">Weather Data</label>
              <input type="checkbox" id="vehicle" checked>
              <label for="vehicle">Vehicle Health</label>
              <input type="checkbox" id="driver" checked>
              <label for="driver">Driver Behavior</label>
            </div>
          </div>
          <button type="submit" class="btn btn--primary">Enable Predictive Mode</button>
        </form>
      </div>
    `);
  };

  window.viewMapView = function() {
    showModal('Live Map View', `
      <div class="map-view">
        <div class="map-container">
          <div class="map-placeholder">
            <h4>🗺️ Interactive Live Map</h4>
            <p>This would display a real-time map showing:</p>
            <ul>
              <li>All active vehicles with live GPS tracking</li>
              <li>Optimized routes with traffic conditions</li>
              <li>Delivery destinations and pickup points</li>
              <li>Weather overlays and road conditions</li>
              <li>Dock locations and availability status</li>
              <li>Exception alerts and incident markers</li>
            </ul>
          </div>
        </div>
        <div class="map-controls">
          <button class="btn btn--outline btn--sm">🔍 Zoom to Fit</button>
          <button class="btn btn--outline btn--sm">🚛 Follow Vehicle</button>
          <button class="btn btn--outline btn--sm">🌦️ Weather Layer</button>
          <button class="btn btn--outline btn--sm">🚦 Traffic Layer</button>
        </div>
      </div>
    `);
  };

  window.viewDetailedTracking = function(orderId) {
    const order = mockData.execution_orders.find(o => o.id === orderId);
    if (order) {
      showModal(`Detailed Tracking - ${orderId}`, `
        <div class="detailed-tracking">
          <div class="tracking-tabs">
            <button class="tab-btn active" onclick="showTrackingTab('timeline')">Timeline</button>
            <button class="tab-btn" onclick="showTrackingTab('sensors')">Sensors</button>
            <button class="tab-btn" onclick="showTrackingTab('predictions')">Predictions</button>
          </div>
          <div id="timeline" class="tab-content active">
            <div class="detailed-timeline">
              ${order.tracking_updates.map(update => `
                <div class="timeline-entry">
                  <div class="timeline-time">${update.time}</div>
                  <div class="timeline-location">${update.location}</div>
                  <div class="timeline-status">${update.status}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div id="sensors" class="tab-content">
            <div class="sensor-data">
              <div class="sensor-grid">
                <div class="sensor-item">
                  <label>Temperature:</label>
                  <span>${order.temperature}</span>
                </div>
                <div class="sensor-item">
                  <label>Humidity:</label>
                  <span>${order.humidity}</span>
                </div>
                <div class="sensor-item">
                  <label>Security:</label>
                  <span>${order.security_status}</span>
                </div>
                <div class="sensor-item">
                  <label>Cargo Condition:</label>
                  <span>${order.cargo_condition}</span>
                </div>
              </div>
            </div>
          </div>
          <div id="predictions" class="tab-content">
            <div class="prediction-data">
              <div class="prediction-item">
                <label>ETA Confidence:</label>
                <span class="confidence-value ${getConfidenceClass(order.eta_confidence)}">${order.eta_confidence}%</span>
              </div>
              <div class="prediction-item">
                <label>Delay Risk:</label>
                <span class="risk-level ${order.delay_risk.toLowerCase().replace(' ', '-')}">${order.delay_risk}</span>
              </div>
              <div class="prediction-item">
                <label>Route Optimization:</label>
                <span>Available - 15 min savings</span>
              </div>
            </div>
          </div>
        </div>
      `);
    }
  };

  window.sendCustomerUpdate = function(orderId) {
    const order = mockData.execution_orders.find(o => o.id === orderId);
    if (order) {
      showNotification(`📧 Sending update to ${order.customer}...`, 'info');
      setTimeout(() => {
        showNotification('✅ Customer notification sent successfully', 'success');
      }, 2000);
    }
  };
}

// Reviews & Analytics helper functions
function setupReviewsAnalyticsInteractions() {
  // Set up sub-module navigation for analytics
  window.showAnalyticsSubModule = function(moduleId, clickedElement) {
    // Hide all sub-modules
    document.querySelectorAll('.sub-module').forEach(module => {
      module.classList.remove('active');
    });

    // Remove active class from all nav items
    document.querySelectorAll('.sub-nav-item').forEach(item => {
      item.classList.remove('active');
    });

    // Show selected module
    const targetModule = document.getElementById(moduleId);
    if (targetModule) {
      targetModule.classList.add('active');
    }

    // Add active class to clicked nav item
    if (clickedElement) {
      clickedElement.classList.add('active');
    }
  };

  // Analytics recommendation functions
  window.implementAnalyticsRecommendations = function() {
    showNotification('📊 Implementing AI analytics recommendations...', 'info');
    setTimeout(() => {
      showNotification('✅ Analytics recommendations implemented! Expected savings: ₹46.2L annually', 'success');
    }, 3000);
  };

  window.viewDetailedAnalysis = function() {
    showModal('Detailed AI Analysis', `
      <div class="detailed-analysis">
        <h4>📊 Comprehensive Analytics Report:</h4>
        <div class="analysis-sections">
          <div class="analysis-section">
            <h5>Cost Optimization Opportunities:</h5>
            <ul>
              <li>Route consolidation: ₹12.5L potential savings</li>
              <li>Carrier renegotiation: ₹9.8L potential savings</li>
              <li>Load optimization: ₹15.2L potential savings</li>
              <li>Fuel efficiency: ₹8.7L potential savings</li>
            </ul>
          </div>
          <div class="analysis-section">
            <h5>Performance Improvements:</h5>
            <ul>
              <li>Delivery time reduction: 18% improvement possible</li>
              <li>Customer satisfaction: 12% increase projected</li>
              <li>Exception handling: 35% faster resolution</li>
            </ul>
          </div>
          <div class="analysis-section">
            <h5>AI Impact Metrics:</h5>
            <ul>
              <li>Automation rate: 87% (target: 95%)</li>
              <li>Decision accuracy: 94% (industry leading)</li>
              <li>Cost reduction: 24% achieved</li>
            </ul>
          </div>
        </div>
        <div class="implementation-timeline">
          <h5>Implementation Timeline:</h5>
          <div class="timeline">
            <div class="timeline-item">
              <span class="timeline-phase">Phase 1 (Month 1-2):</span>
              <span class="timeline-action">Route optimization implementation</span>
            </div>
            <div class="timeline-item">
              <span class="timeline-phase">Phase 2 (Month 3-4):</span>
              <span class="timeline-action">Carrier performance optimization</span>
            </div>
            <div class="timeline-item">
              <span class="timeline-phase">Phase 3 (Month 5-6):</span>
              <span class="timeline-action">Advanced analytics deployment</span>
            </div>
          </div>
        </div>
      </div>
    `);
  };

  // Order analytics functions
  window.refreshAnalytics = function() {
    showNotification('🔄 Refreshing analytics data...', 'info');
    setTimeout(() => {
      showNotification('✅ Analytics data updated with latest performance metrics', 'success');
    }, 2000);
  };

  window.generateReport = function() {
    showModal('Generate Analytics Report', `
      <div class="report-generation">
        <h4>📊 Generate Custom Analytics Report:</h4>
        <form class="report-form">
          <div class="form-group">
            <label>Report Type:</label>
            <select required>
              <option>Performance Summary</option>
              <option>Cost Analysis</option>
              <option>Carrier Performance</option>
              <option>Trend Analysis</option>
              <option>Comprehensive Report</option>
            </select>
          </div>
          <div class="form-group">
            <label>Time Period:</label>
            <select required>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Year to date</option>
              <option>Custom range</option>
            </select>
          </div>
          <div class="form-group">
            <label>Include Sections:</label>
            <div class="checkbox-group">
              <input type="checkbox" id="executive-summary" checked>
              <label for="executive-summary">Executive Summary</label>
              <input type="checkbox" id="detailed-metrics" checked>
              <label for="detailed-metrics">Detailed Metrics</label>
              <input type="checkbox" id="ai-insights" checked>
              <label for="ai-insights">AI Insights</label>
              <input type="checkbox" id="recommendations" checked>
              <label for="recommendations">Recommendations</label>
            </div>
          </div>
          <div class="form-group">
            <label>Format:</label>
            <select>
              <option>PDF</option>
              <option>Excel</option>
              <option>PowerPoint</option>
            </select>
          </div>
          <button type="submit" class="btn btn--primary">Generate Report</button>
        </form>
      </div>
    `);
  };

  window.exportInsights = function() {
    showNotification('📤 Exporting performance insights...', 'info');
    setTimeout(() => {
      showNotification('✅ Insights exported successfully to Excel format', 'success');
    }, 2000);
  };

  // Carrier performance functions
  window.recalculateScores = function() {
    showNotification('🔄 Recalculating AI performance scores...', 'info');
    setTimeout(() => {
      showNotification('✅ Performance scores updated with latest data and algorithms', 'success');
    }, 2500);
  };

  window.benchmarkCarriers = function() {
    showModal('Carrier Benchmarking Analysis', `
      <div class="benchmarking-analysis">
        <h4>🏆 Carrier Benchmarking Results:</h4>
        <div class="benchmark-summary">
          <div class="benchmark-leaders">
            <h5>Top Performers:</h5>
            <div class="leader-list">
              ${mockData.analytics_data.carrier_performance
                .sort((a, b) => b.ai_performance_score - a.ai_performance_score)
                .slice(0, 2)
                .map((carrier, index) => `
                  <div class="leader-item">
                    <span class="leader-rank">#${index + 1}</span>
                    <span class="leader-name">${carrier.name}</span>
                    <span class="leader-score">${carrier.ai_performance_score}</span>
                  </div>
                `).join('')}
            </div>
          </div>
          <div class="benchmark-metrics">
            <h5>Industry Benchmarks:</h5>
            <div class="benchmark-comparison">
              <div class="benchmark-item">
                <span class="benchmark-label">On-Time Delivery:</span>
                <span class="benchmark-value">Industry: 85% | Our Avg: ${Math.round(mockData.analytics_data.carrier_performance.reduce((sum, c) => sum + c.on_time_rate, 0) / mockData.analytics_data.carrier_performance.length)}%</span>
              </div>
              <div class="benchmark-item">
                <span class="benchmark-label">Damage Rate:</span>
                <span class="benchmark-value">Industry: 2.5% | Our Avg: ${(mockData.analytics_data.carrier_performance.reduce((sum, c) => sum + c.damage_rate, 0) / mockData.analytics_data.carrier_performance.length).toFixed(1)}%</span>
              </div>
              <div class="benchmark-item">
                <span class="benchmark-label">Customer Rating:</span>
                <span class="benchmark-value">Industry: 3.8 | Our Avg: ${(mockData.analytics_data.carrier_performance.reduce((sum, c) => sum + c.customer_rating, 0) / mockData.analytics_data.carrier_performance.length).toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="improvement-recommendations">
          <h5>🎯 Improvement Recommendations:</h5>
          <ul>
            <li>Focus on improving underperforming carriers through training programs</li>
            <li>Implement performance-based incentives for top carriers</li>
            <li>Consider expanding partnerships with high-scoring carriers</li>
            <li>Develop carrier development programs for medium performers</li>
          </ul>
        </div>
      </div>
    `);
  };

  window.viewCarrierAnalytics = function(carrierId) {
    const carrier = mockData.analytics_data.carrier_performance.find(c => c.id === carrierId);
    if (carrier) {
      showModal(`Carrier Analytics - ${carrier.name}`, `
        <div class="carrier-analytics">
          <div class="analytics-tabs">
            <button class="tab-btn active" onclick="showAnalyticsTab('performance')">Performance</button>
            <button class="tab-btn" onclick="showAnalyticsTab('trends')">Trends</button>
            <button class="tab-btn" onclick="showAnalyticsTab('recommendations')">Recommendations</button>
          </div>
          <div id="performance" class="tab-content active">
            <div class="performance-overview">
              <div class="performance-grid">
                <div class="performance-metric">
                  <label>AI Performance Score:</label>
                  <span class="metric-value ${getScoreClass(carrier.ai_performance_score)}">${carrier.ai_performance_score}</span>
                </div>
                <div class="performance-metric">
                  <label>On-Time Rate:</label>
                  <span class="metric-value">${carrier.on_time_rate}%</span>
                </div>
                <div class="performance-metric">
                  <label>Cost Efficiency:</label>
                  <span class="metric-value">${carrier.cost_efficiency_score}</span>
                </div>
                <div class="performance-metric">
                  <label>Customer Rating:</label>
                  <span class="metric-value">${carrier.customer_rating}/5</span>
                </div>
              </div>
            </div>
          </div>
          <div id="trends" class="tab-content">
            <div class="trend-analysis">
              <h5>Performance Trends:</h5>
              <div class="trend-comparison">
                <div class="trend-period">
                  <h6>Last 30 Days:</h6>
                  <p>On-Time: ${carrier.performance_trends.last_30_days.on_time}%</p>
                  <p>Efficiency: ${carrier.performance_trends.last_30_days.cost_efficiency}</p>
                  <p>Satisfaction: ${carrier.performance_trends.last_30_days.satisfaction}</p>
                </div>
                <div class="trend-period">
                  <h6>Last 90 Days:</h6>
                  <p>On-Time: ${carrier.performance_trends.last_90_days.on_time}%</p>
                  <p>Efficiency: ${carrier.performance_trends.last_90_days.cost_efficiency}</p>
                  <p>Satisfaction: ${carrier.performance_trends.last_90_days.satisfaction}</p>
                </div>
              </div>
            </div>
          </div>
          <div id="recommendations" class="tab-content">
            <div class="carrier-recommendations">
              <h5>🤖 AI Recommendations:</h5>
              <ul>
                ${carrier.ai_recommendations.map(rec => `<li>${rec}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `);
    }
  };

  window.optimizeCarrierPerformance = function(carrierId) {
    const carrier = mockData.analytics_data.carrier_performance.find(c => c.id === carrierId);
    if (carrier) {
      showNotification(`🚀 Optimizing performance for ${carrier.name}...`, 'info');
      setTimeout(() => {
        showNotification('✅ Performance optimization plan created and sent to carrier', 'success');
      }, 2500);
    }
  };

  // Cost analysis functions
  window.refreshCostData = function() {
    showNotification('🔄 Refreshing cost analysis data...', 'info');
    setTimeout(() => {
      showNotification('✅ Cost data updated with latest financial information', 'success');
    }, 2000);
  };

  window.generateCostReport = function() {
    showModal('Generate Cost Report', `
      <div class="cost-report-generation">
        <h4>💰 Generate Cost Analysis Report:</h4>
        <form class="cost-report-form">
          <div class="form-group">
            <label>Report Scope:</label>
            <select required>
              <option>Overall Cost Analysis</option>
              <option>Route-wise Breakdown</option>
              <option>Carrier Cost Comparison</option>
              <option>Optimization Opportunities</option>
              <option>ROI Analysis</option>
            </select>
          </div>
          <div class="form-group">
            <label>Cost Categories:</label>
            <div class="checkbox-group">
              <input type="checkbox" id="fuel-costs" checked>
              <label for="fuel-costs">Fuel Costs</label>
              <input type="checkbox" id="labor-costs" checked>
              <label for="labor-costs">Labor Costs</label>
              <input type="checkbox" id="maintenance-costs" checked>
              <label for="maintenance-costs">Maintenance</label>
              <input type="checkbox" id="insurance-costs" checked>
              <label for="insurance-costs">Insurance</label>
            </div>
          </div>
          <div class="form-group">
            <label>Analysis Period:</label>
            <select required>
              <option>Current Month</option>
              <option>Last Quarter</option>
              <option>Year to Date</option>
              <option>Last 12 Months</option>
            </select>
          </div>
          <div class="form-group">
            <label>Include Projections:</label>
            <input type="checkbox" id="include-projections" checked>
            <label for="include-projections">Include 6-month cost projections</label>
          </div>
          <button type="submit" class="btn btn--primary">Generate Cost Report</button>
        </form>
      </div>
    `);
  };

  window.implementOptimization = function(category) {
    const opportunity = mockData.analytics_data.cost_analysis.cost_optimization_opportunities.find(o => o.category === category);
    if (opportunity) {
      showModal(`Implement ${category} Optimization`, `
        <div class="optimization-implementation">
          <h4>🎯 ${category} Optimization Plan:</h4>
          <div class="optimization-details">
            <div class="savings-projection">
              <h5>Projected Savings:</h5>
              <div class="savings-amount">₹${(opportunity.potential_savings / 100000).toFixed(1)}L annually</div>
              <div class="savings-percentage">${Math.round((opportunity.potential_savings / mockData.analytics_data.cost_analysis.total_transport_cost) * 100)}% of total transport costs</div>
            </div>
            <div class="implementation-plan">
              <h5>Implementation Steps:</h5>
              <div class="implementation-timeline">
                ${category === 'Route Optimization' ? `
                  <div class="step-item">
                    <span class="step-number">1</span>
                    <span class="step-description">Analyze current route efficiency</span>
                    <span class="step-duration">Week 1-2</span>
                  </div>
                  <div class="step-item">
                    <span class="step-number">2</span>
                    <span class="step-description">Implement AI route optimization</span>
                    <span class="step-duration">Week 3-4</span>
                  </div>
                  <div class="step-item">
                    <span class="step-number">3</span>
                    <span class="step-description">Monitor and adjust algorithms</span>
                    <span class="step-duration">Week 5-8</span>
                  </div>
                ` : category === 'Load Consolidation' ? `
                  <div class="step-item">
                    <span class="step-number">1</span>
                    <span class="step-description">Analyze load patterns</span>
                    <span class="step-duration">Week 1</span>
                  </div>
                  <div class="step-item">
                    <span class="step-number">2</span>
                    <span class="step-description">Deploy consolidation algorithms</span>
                    <span class="step-duration">Week 2-3</span>
                  </div>
                  <div class="step-item">
                    <span class="step-number">3</span>
                    <span class="step-description">Optimize load matching</span>
                    <span class="step-duration">Week 4-6</span>
                  </div>
                ` : `
                  <div class="step-item">
                    <span class="step-number">1</span>
                    <span class="step-description">Assess current ${category.toLowerCase()}</span>
                    <span class="step-duration">Week 1-2</span>
                  </div>
                  <div class="step-item">
                    <span class="step-number">2</span>
                    <span class="step-description">Implement optimization strategies</span>
                    <span class="step-duration">Week 3-6</span>
                  </div>
                  <div class="step-item">
                    <span class="step-number">3</span>
                    <span class="step-description">Monitor and refine</span>
                    <span class="step-duration">Week 7-12</span>
                  </div>
                `}
              </div>
            </div>
            <div class="risk-assessment">
              <h5>Risk Assessment:</h5>
              <div class="risk-level ${opportunity.implementation_effort.toLowerCase()}">
                Implementation Risk: ${opportunity.implementation_effort}
              </div>
              <div class="mitigation-strategies">
                <p>Mitigation strategies will be implemented to minimize disruption during optimization.</p>
              </div>
            </div>
          </div>
          <div class="implementation-actions">
            <button class="btn btn--primary" onclick="startOptimizationImplementation('${category}')">Start Implementation</button>
            <button class="btn btn--outline" onclick="scheduleOptimization('${category}')">Schedule for Later</button>
          </div>
        </div>
      `);
    }
  };

  window.analyzeOpportunity = function(category) {
    const opportunity = mockData.analytics_data.cost_analysis.cost_optimization_opportunities.find(o => o.category === category);
    if (opportunity) {
      showModal(`${category} Analysis`, `
        <div class="opportunity-analysis">
          <h4>📊 Detailed ${category} Analysis:</h4>
          <div class="analysis-metrics">
            <div class="metric-section">
              <h5>Current State:</h5>
              <div class="current-metrics">
                ${category === 'Route Optimization' ? `
                  <p>Average route efficiency: 78%</p>
                  <p>Fuel consumption: Above optimal by 15%</p>
                  <p>Delivery time variance: ±25 minutes</p>
                ` : category === 'Load Consolidation' ? `
                  <p>Current load utilization: 72%</p>
                  <p>Empty miles: 18% of total</p>
                  <p>Consolidation opportunities: 156 per month</p>
                ` : `
                  <p>Current efficiency: 68%</p>
                  <p>Optimization potential: High</p>
                  <p>Implementation complexity: ${opportunity.implementation_effort}</p>
                `}
              </div>
            </div>
            <div class="metric-section">
              <h5>Projected Improvements:</h5>
              <div class="projected-metrics">
                <p>Cost reduction: ₹${(opportunity.potential_savings / 100000).toFixed(1)}L annually</p>
                <p>Efficiency improvement: 15-25%</p>
                <p>ROI timeline: 6-12 months</p>
              </div>
            </div>
          </div>
          <div class="competitive-analysis">
            <h5>Industry Comparison:</h5>
            <p>Our performance vs industry average in ${category.toLowerCase()}:</p>
            <div class="comparison-chart">
              <div class="comparison-bar">
                <span class="comparison-label">Industry Average</span>
                <div class="comparison-fill industry" style="width: 65%"></div>
                <span class="comparison-value">65%</span>
              </div>
              <div class="comparison-bar">
                <span class="comparison-label">Our Current</span>
                <div class="comparison-fill current" style="width: 72%"></div>
                <span class="comparison-value">72%</span>
              </div>
              <div class="comparison-bar">
                <span class="comparison-label">Post-Optimization</span>
                <div class="comparison-fill projected" style="width: 88%"></div>
                <span class="comparison-value">88%</span>
              </div>
            </div>
          </div>
        </div>
      `);
    }
  };

  window.analyzeRoute = function(routeName) {
    const route = mockData.analytics_data.cost_analysis.cost_breakdown_by_route.find(r => r.route === routeName);
    if (route) {
      showModal(`Route Analysis - ${routeName}`, `
        <div class="route-analysis">
          <h4>🛣️ ${routeName} Route Analysis:</h4>
          <div class="route-metrics">
            <div class="metric-grid">
              <div class="route-metric">
                <label>Total Cost:</label>
                <span class="metric-value">₹${route.cost.toLocaleString()}</span>
              </div>
              <div class="route-metric">
                <label>Volume:</label>
                <span class="metric-value">${route.volume} shipments</span>
              </div>
              <div class="route-metric">
                <label>Cost per Shipment:</label>
                <span class="metric-value">₹${route.cost_per_shipment}</span>
              </div>
              <div class="route-metric">
                <label>Efficiency Rating:</label>
                <span class="efficiency-rating ${route.cost_per_shipment < 300 ? 'excellent' : route.cost_per_shipment < 500 ? 'good' : 'average'}">
                  ${route.cost_per_shipment < 300 ? 'Excellent' : route.cost_per_shipment < 500 ? 'Good' : 'Average'}
                </span>
              </div>
            </div>
          </div>
          <div class="route-insights">
            <h5>📊 Route Insights:</h5>
            <ul>
              <li>Peak traffic hours: 8-10 AM, 5-7 PM</li>
              <li>Average delivery time: ${route.cost_per_shipment > 500 ? '24' : route.cost_per_shipment > 300 ? '18' : '14'} hours</li>
              <li>Fuel efficiency: ${route.cost_per_shipment < 300 ? 'Excellent' : route.cost_per_shipment < 500 ? 'Good' : 'Needs improvement'}</li>
              <li>Carrier performance: ${route.cost_per_shipment < 400 ? 'Above average' : 'Average'}</li>
            </ul>
          </div>
          <div class="optimization-suggestions">
            <h5>🎯 Optimization Suggestions:</h5>
            <ul>
              ${route.cost_per_shipment > 500 ? `
                <li>Consider alternative routes during peak hours</li>
                <li>Implement load consolidation strategies</li>
                <li>Negotiate better rates with carriers</li>
              ` : route.cost_per_shipment > 300 ? `
                <li>Fine-tune delivery schedules</li>
                <li>Optimize vehicle utilization</li>
              ` : `
                <li>Route is performing excellently</li>
                <li>Consider expanding volume on this route</li>
              `}
            </ul>
          </div>
        </div>
      `);
    }
  };

  window.optimizeRouteCost = function(routeName) {
    const route = mockData.analytics_data.cost_analysis.cost_breakdown_by_route.find(r => r.route === routeName);
    if (route) {
      showNotification(`🚀 Optimizing costs for ${routeName} route...`, 'info');
      setTimeout(() => {
        const savings = Math.round(route.cost * 0.15);
        showNotification(`✅ Route optimization completed! Projected savings: ₹${savings.toLocaleString()}`, 'success');
      }, 3000);
    }
  };

  // Helper functions for optimization implementation
  window.startOptimizationImplementation = function(category) {
    showNotification(`🚀 Starting ${category} optimization implementation...`, 'info');
    setTimeout(() => {
      showNotification(`✅ ${category} optimization implementation initiated successfully`, 'success');
    }, 2000);
  };

  window.scheduleOptimization = function(category) {
    showNotification(`📅 ${category} optimization scheduled for next maintenance window`, 'info');
  };
}

// Settings helper functions
function setupSettingsInteractions() {
  // Set up sub-module navigation for settings
  window.showSettingsSubModule = function(moduleId, clickedElement) {
    // Hide all sub-modules
    document.querySelectorAll('.sub-module').forEach(module => {
      module.classList.remove('active');
    });

    // Remove active class from all nav items
    document.querySelectorAll('.sub-nav-item').forEach(item => {
      item.classList.remove('active');
    });

    // Show selected module
    const targetModule = document.getElementById(moduleId);
    if (targetModule) {
      targetModule.classList.add('active');
    }

    // Add active class to clicked nav item
    if (clickedElement) {
      clickedElement.classList.add('active');
    }
  };

  // AI Personalization functions
  window.applyAIPersonalization = function() {
    showNotification('🤖 Applying AI personalization recommendations...', 'info');
    setTimeout(() => {
      showNotification('✅ AI personalization applied! Productivity improvement expected: 40%', 'success');
    }, 3000);
  };

  window.viewPersonalizationAnalysis = function() {
    showModal('AI Personalization Analysis', `
      <div class="personalization-analysis">
        <h4>🧠 AI Usage Pattern Analysis:</h4>
        <div class="analysis-sections">
          <div class="analysis-section">
            <h5>Usage Patterns Detected:</h5>
            <ul>
              <li>Peak usage hours: 9 AM - 12 PM, 2 PM - 5 PM</li>
              <li>Most accessed features: Vehicle tracking, Route optimization</li>
              <li>Preferred dashboard layout: Advanced Analytics</li>
              <li>Notification response rate: 85% within 30 minutes</li>
            </ul>
          </div>
          <div class="analysis-section">
            <h5>Personalization Recommendations:</h5>
            <ul>
              <li>Enable predictive insights during peak hours</li>
              <li>Customize dashboard with frequently used widgets</li>
              <li>Optimize notification timing for better response rates</li>
              <li>Auto-enable advanced features based on expertise level</li>
            </ul>
          </div>
          <div class="analysis-section">
            <h5>Expected Benefits:</h5>
            <ul>
              <li>40% improvement in task completion speed</li>
              <li>25% reduction in navigation time</li>
              <li>60% increase in AI recommendation acceptance</li>
              <li>30% reduction in notification fatigue</li>
            </ul>
          </div>
        </div>
      </div>
    `);
  };

  // User preference functions
  window.updateAIAssistanceLevel = function(level) {
    mockData.settings_data.user_preferences.ai_assistance_level = level;
    showNotification(`🤖 AI assistance level updated to ${level}`, 'success');
  };

  window.updateDashboardLayout = function(layout) {
    mockData.settings_data.user_preferences.dashboard_layout = layout;
    showNotification(`📊 Dashboard layout changed to ${layout}`, 'success');
  };

  window.updateTheme = function(theme) {
    mockData.settings_data.user_preferences.theme = theme;
    showNotification(`🎨 Theme updated to ${theme}`, 'success');
  };

  window.updateLanguage = function(language) {
    mockData.settings_data.user_preferences.language = language;
    showNotification(`🌐 Language changed to ${language}`, 'success');
  };

  window.updateNotificationPreference = function(key, enabled) {
    mockData.settings_data.user_preferences.notification_preferences[key] = enabled;
    showNotification(`🔔 ${key.replace(/_/g, ' ')} notifications ${enabled ? 'enabled' : 'disabled'}`, 'success');
  };

  window.updateAIFeature = function(key, enabled) {
    mockData.settings_data.user_preferences.ai_personalization[key] = enabled;
    showNotification(`🧠 AI ${key.replace(/_/g, ' ')} ${enabled ? 'enabled' : 'disabled'}`, 'success');
  };

  window.updateRefreshInterval = function(value) {
    mockData.settings_data.user_preferences.performance_preferences.auto_refresh_interval = parseInt(value);
    document.getElementById('refresh-value').textContent = value + 's';
    showNotification(`⚡ Auto refresh interval updated to ${value} seconds`, 'success');
  };

  window.updateDataRetention = function(value) {
    mockData.settings_data.user_preferences.performance_preferences.data_retention_days = parseInt(value);
    document.getElementById('retention-value').textContent = value + ' days';
    showNotification(`📊 Data retention updated to ${value} days`, 'success');
  };

  window.updateChartAnimation = function(enabled) {
    mockData.settings_data.user_preferences.performance_preferences.chart_animation = enabled;
    showNotification(`📈 Chart animations ${enabled ? 'enabled' : 'disabled'}`, 'success');
  };

  window.updateRealTimeUpdates = function(enabled) {
    mockData.settings_data.user_preferences.performance_preferences.real_time_updates = enabled;
    showNotification(`⚡ Real-time updates ${enabled ? 'enabled' : 'disabled'}`, 'success');
  };

  window.resetPersonalization = function() {
    showModal('Reset Personalization', `
      <div class="reset-confirmation">
        <h4>⚠️ Reset AI Personalization</h4>
        <p>This will reset all AI personalization settings to default values. Your usage patterns and learned preferences will be cleared.</p>
        <div class="reset-options">
          <div class="checkbox-group">
            <input type="checkbox" id="reset-preferences" checked>
            <label for="reset-preferences">Reset user preferences</label>
            <input type="checkbox" id="reset-ai-learning" checked>
            <label for="reset-ai-learning">Clear AI learning data</label>
            <input type="checkbox" id="reset-notifications" checked>
            <label for="reset-notifications">Reset notification settings</label>
          </div>
        </div>
        <div class="reset-actions">
          <button class="btn btn--outline" onclick="closeModal()">Cancel</button>
          <button class="btn btn--error" onclick="confirmResetPersonalization()">Reset All</button>
        </div>
      </div>
    `);
  };

  window.confirmResetPersonalization = function() {
    showNotification('🔄 Resetting AI personalization...', 'info');
    setTimeout(() => {
      showNotification('✅ AI personalization reset successfully', 'success');
      closeModal();
    }, 2000);
  };

  window.savePreferences = function() {
    showNotification('💾 Saving user preferences...', 'info');
    setTimeout(() => {
      showNotification('✅ User preferences saved successfully', 'success');
    }, 1500);
  };

  // Helper functions for descriptions
  window.getNotificationDescription = function(key) {
    const descriptions = {
      email_notifications: 'Receive notifications via email',
      sms_notifications: 'Receive critical alerts via SMS',
      push_notifications: 'Browser push notifications',
      ai_recommendations: 'AI-generated recommendations and insights',
      exception_alerts: 'Immediate alerts for exceptions and issues',
      performance_reports: 'Regular performance and analytics reports',
      cost_alerts: 'Notifications about cost optimization opportunities',
      maintenance_reminders: 'Predictive maintenance alerts and reminders'
    };
    return descriptions[key] || 'Notification setting';
  };

  window.getAIFeatureDescription = function(key) {
    const descriptions = {
      learning_enabled: 'Allow AI to learn from your usage patterns',
      auto_suggestions: 'Automatic suggestions based on context',
      predictive_insights: 'Proactive insights and recommendations',
      custom_recommendations: 'Personalized recommendations based on your role',
      behavior_analysis: 'Analyze behavior patterns for optimization'
    };
    return descriptions[key] || 'AI feature setting';
  };

  // System Configuration functions
  window.refreshModelStatus = function() {
    showNotification('🔄 Refreshing AI model status...', 'info');
    setTimeout(() => {
      showNotification('✅ AI model status updated successfully', 'success');
    }, 2000);
  };

  window.optimizeAllModels = function() {
    showNotification('🚀 Optimizing all AI models...', 'info');
    setTimeout(() => {
      showNotification('✅ All AI models optimized! Performance improvement: 15%', 'success');
    }, 4000);
  };

  window.configureModel = function(modelId) {
    const model = mockData.settings_data.system_configuration.ai_models.find(m => m.id === modelId);
    if (model) {
      showModal(`Configure ${model.name}`, `
        <div class="model-configuration">
          <h4>⚙️ ${model.name} Configuration:</h4>
          <form class="model-config-form">
            <div class="form-group">
              <label>Confidence Threshold:</label>
              <div class="range-input">
                <input type="range" min="50" max="99" value="${model.confidence_threshold}"
                       onchange="updateModelThreshold('${modelId}', this.value)" id="threshold-${modelId}">
                <span id="threshold-value-${modelId}">${model.confidence_threshold}%</span>
              </div>
            </div>
            <div class="form-group">
              <label>Training Frequency:</label>
              <select onchange="updateTrainingFrequency('${modelId}', this.value)">
                <option value="Daily" ${model.training_frequency === 'Daily' ? 'selected' : ''}>Daily</option>
                <option value="Weekly" ${model.training_frequency === 'Weekly' ? 'selected' : ''}>Weekly</option>
                <option value="Bi-weekly" ${model.training_frequency === 'Bi-weekly' ? 'selected' : ''}>Bi-weekly</option>
                <option value="Monthly" ${model.training_frequency === 'Monthly' ? 'selected' : ''}>Monthly</option>
              </select>
            </div>
            <div class="form-group">
              <div class="checkbox-setting">
                <input type="checkbox" id="auto-retrain-${modelId}" ${model.auto_retrain ? 'checked' : ''}
                       onchange="updateAutoRetrain('${modelId}', this.checked)">
                <label for="auto-retrain-${modelId}">Enable Auto Retrain</label>
              </div>
            </div>
            <div class="form-group">
              <label>Data Sources:</label>
              <div class="data-sources">
                ${model.data_sources.map(source => `<span class="data-source-tag">${source}</span>`).join('')}
              </div>
            </div>
            <div class="form-group">
              <label>Optimization Target:</label>
              <input type="text" value="${model.optimization_target}" readonly>
            </div>
            <button type="submit" class="btn btn--primary">Save Configuration</button>
          </form>
        </div>
      `);
    }
  };

  window.trainModel = function(modelId) {
    const model = mockData.settings_data.system_configuration.ai_models.find(m => m.id === modelId);
    if (model) {
      showNotification(`🎯 Starting training for ${model.name}...`, 'info');
      setTimeout(() => {
        showNotification(`✅ ${model.name} training completed successfully`, 'success');
      }, 5000);
    }
  };

  window.updateSystemSetting = function(setting, value) {
    showNotification(`⚙️ System setting '${setting.replace(/_/g, ' ')}' updated`, 'success');
  };

  window.updateAPIRateLimit = function(value) {
    document.getElementById('api-rate-value').textContent = value + '/hour';
    showNotification(`🔧 API rate limit updated to ${value}/hour`, 'success');
  };

  window.updateConcurrentUsers = function(value) {
    document.getElementById('concurrent-users-value').textContent = value + ' users';
    showNotification(`👥 Concurrent users limit updated to ${value}`, 'success');
  };

  window.updateCacheDuration = function(value) {
    document.getElementById('cache-duration-value').textContent = value + 's';
    showNotification(`⚡ Cache duration updated to ${value} seconds`, 'success');
  };

  window.exportSystemConfig = function() {
    showNotification('📤 Exporting system configuration...', 'info');
    setTimeout(() => {
      showNotification('✅ System configuration exported successfully', 'success');
    }, 2000);
  };

  window.saveSystemConfig = function() {
    showNotification('💾 Saving system configuration...', 'info');
    setTimeout(() => {
      showNotification('✅ System configuration saved successfully', 'success');
    }, 2000);
  };

  window.testAllIntegrations = function() {
    showNotification('🧪 Testing all integrations...', 'info');
    setTimeout(() => {
      showNotification('✅ All integrations tested successfully', 'success');
    }, 3000);
  };

  window.syncAllIntegrations = function() {
    showNotification('🔄 Syncing all integrations...', 'info');
    setTimeout(() => {
      showNotification('✅ All integrations synchronized successfully', 'success');
    }, 3500);
  };

  window.toggleIntegration = function(integrationKey, enabled) {
    const integrationName = integrationKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    showNotification(`🔗 ${integrationName} integration ${enabled ? 'enabled' : 'disabled'}`, 'success');
  };

  window.configureIntegration = function(integrationKey) {
    const integrationName = integrationKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    showModal(`Configure ${integrationName} Integration`, `
      <div class="integration-configuration">
        <h4>🔗 ${integrationName} Integration Settings:</h4>
        <form class="integration-config-form">
          <div class="form-group">
            <label>Connection Status:</label>
            <span class="status-indicator connected">Connected</span>
          </div>
          <div class="form-group">
            <label>Sync Frequency:</label>
            <select>
              <option>Real-time</option>
              <option>Every 5 minutes</option>
              <option>Every 15 minutes</option>
              <option>Hourly</option>
            </select>
          </div>
          <div class="form-group">
            <label>Data Mapping:</label>
            <textarea placeholder="Configure data field mappings..." rows="4"></textarea>
          </div>
          <div class="form-group">
            <div class="checkbox-setting">
              <input type="checkbox" id="auto-retry" checked>
              <label for="auto-retry">Enable Auto Retry on Failure</label>
            </div>
          </div>
          <div class="form-actions">
            <button type="button" class="btn btn--outline" onclick="testIntegrationConnection('${integrationKey}')">🧪 Test Connection</button>
            <button type="submit" class="btn btn--primary">Save Configuration</button>
          </div>
        </form>
      </div>
    `);
  };

  window.testIntegrationConnection = function(integrationKey) {
    const integrationName = integrationKey.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    showNotification(`🧪 Testing ${integrationName} connection...`, 'info');
    setTimeout(() => {
      showNotification(`✅ ${integrationName} connection test successful`, 'success');
    }, 2000);
  };

  // Notification Management functions
  window.optimizeNotificationRules = function() {
    showNotification('🎯 Optimizing notification rules with AI...', 'info');
    setTimeout(() => {
      showNotification('✅ Notification rules optimized! 35% reduction in alert fatigue expected', 'success');
    }, 3000);
  };

  window.createNotificationRule = function() {
    showModal('Create Notification Rule', `
      <div class="notification-rule-creation">
        <h4>🔔 Create New Notification Rule:</h4>
        <form class="notification-rule-form">
          <div class="form-group">
            <label>Rule Name:</label>
            <input type="text" placeholder="Enter rule name" required>
          </div>
          <div class="form-group">
            <label>Rule Type:</label>
            <select required>
              <option>Exception Alert</option>
              <option>AI Recommendation</option>
              <option>Predictive Alert</option>
              <option>Performance Alert</option>
              <option>Cost Alert</option>
            </select>
          </div>
          <div class="form-group">
            <label>Condition:</label>
            <textarea placeholder="Define the condition that triggers this notification" rows="3" required></textarea>
          </div>
          <div class="form-group">
            <label>Notification Channels:</label>
            <div class="checkbox-group">
              <input type="checkbox" id="email-channel" checked>
              <label for="email-channel">Email</label>
              <input type="checkbox" id="sms-channel">
              <label for="sms-channel">SMS</label>
              <input type="checkbox" id="push-channel" checked>
              <label for="push-channel">Push Notification</label>
              <input type="checkbox" id="dashboard-channel" checked>
              <label for="dashboard-channel">Dashboard</label>
            </div>
          </div>
          <div class="form-group">
            <label>Recipients:</label>
            <select multiple>
              <option>Transport Manager</option>
              <option>Operations Team</option>
              <option>Finance Team</option>
              <option>Maintenance Team</option>
              <option>Fleet Manager</option>
            </select>
          </div>
          <div class="form-group">
            <label>Frequency:</label>
            <select>
              <option>Immediate</option>
              <option>Real-time</option>
              <option>Every 5 minutes</option>
              <option>Hourly</option>
              <option>Daily</option>
              <option>As needed</option>
            </select>
          </div>
          <div class="form-group">
            <label>AI Priority Score:</label>
            <div class="range-input">
              <input type="range" min="1" max="100" value="80" id="priority-range">
              <span id="priority-value">80</span>
            </div>
          </div>
          <button type="submit" class="btn btn--primary">Create Rule</button>
        </form>
      </div>
    `);
  };

  window.toggleNotificationRule = function(ruleId, enabled) {
    const rule = mockData.settings_data.notification_management.notification_rules.find(r => r.id === ruleId);
    if (rule) {
      rule.enabled = enabled;
      showNotification(`🔔 Notification rule '${rule.name}' ${enabled ? 'enabled' : 'disabled'}`, 'success');
    }
  };

  window.editNotificationRule = function(ruleId) {
    const rule = mockData.settings_data.notification_management.notification_rules.find(r => r.id === ruleId);
    if (rule) {
      showModal(`Edit Notification Rule - ${rule.name}`, `
        <div class="notification-rule-edit">
          <h4>✏️ Edit Notification Rule:</h4>
          <form class="notification-rule-form">
            <div class="form-group">
              <label>Rule Name:</label>
              <input type="text" value="${rule.name}" required>
            </div>
            <div class="form-group">
              <label>Rule Type:</label>
              <select required>
                <option value="Exception Alert" ${rule.type === 'Exception Alert' ? 'selected' : ''}>Exception Alert</option>
                <option value="AI Recommendation" ${rule.type === 'AI Recommendation' ? 'selected' : ''}>AI Recommendation</option>
                <option value="Predictive Alert" ${rule.type === 'Predictive Alert' ? 'selected' : ''}>Predictive Alert</option>
                <option value="Performance Alert" ${rule.type === 'Performance Alert' ? 'selected' : ''}>Performance Alert</option>
              </select>
            </div>
            <div class="form-group">
              <label>Condition:</label>
              <textarea rows="3" required>${rule.condition}</textarea>
            </div>
            <div class="form-group">
              <label>Frequency:</label>
              <select>
                <option value="Immediate" ${rule.frequency === 'Immediate' ? 'selected' : ''}>Immediate</option>
                <option value="Real-time" ${rule.frequency === 'Real-time' ? 'selected' : ''}>Real-time</option>
                <option value="Daily" ${rule.frequency === 'Daily' ? 'selected' : ''}>Daily</option>
                <option value="As needed" ${rule.frequency === 'As needed' ? 'selected' : ''}>As needed</option>
              </select>
            </div>
            <div class="form-group">
              <label>AI Priority Score:</label>
              <div class="range-input">
                <input type="range" min="1" max="100" value="${rule.ai_priority_score}" id="edit-priority-range">
                <span id="edit-priority-value">${rule.ai_priority_score}</span>
              </div>
            </div>
            <button type="submit" class="btn btn--primary">Update Rule</button>
          </form>
        </div>
      `);
    }
  };

  window.testNotificationRule = function(ruleId) {
    const rule = mockData.settings_data.notification_management.notification_rules.find(r => r.id === ruleId);
    if (rule) {
      showNotification(`🧪 Testing notification rule '${rule.name}'...`, 'info');
      setTimeout(() => {
        showNotification(`✅ Test notification sent successfully via ${rule.channels.join(', ')}`, 'success');
      }, 2000);
    }
  };

  window.clearNotificationHistory = function() {
    showModal('Clear Notification History', `
      <div class="clear-history-confirmation">
        <h4>⚠️ Clear Notification History</h4>
        <p>This will permanently delete all notification history. This action cannot be undone.</p>
        <div class="clear-options">
          <div class="checkbox-group">
            <input type="checkbox" id="clear-all" checked>
            <label for="clear-all">Clear all notifications</label>
            <input type="checkbox" id="clear-old">
            <label for="clear-old">Clear only notifications older than 30 days</label>
          </div>
        </div>
        <div class="clear-actions">
          <button class="btn btn--outline" onclick="closeModal()">Cancel</button>
          <button class="btn btn--error" onclick="confirmClearHistory()">Clear History</button>
        </div>
      </div>
    `);
  };

  window.confirmClearHistory = function() {
    showNotification('🗑️ Clearing notification history...', 'info');
    setTimeout(() => {
      showNotification('✅ Notification history cleared successfully', 'success');
      closeModal();
    }, 2000);
  };

  window.exportNotificationHistory = function() {
    showNotification('📤 Exporting notification history...', 'info');
    setTimeout(() => {
      showNotification('✅ Notification history exported to CSV format', 'success');
    }, 2000);
  };

  // AI Model Management functions
  window.refreshModelPerformance = function() {
    showNotification('🔄 Refreshing AI model performance data...', 'info');
    setTimeout(() => {
      showNotification('✅ Model performance data updated successfully', 'success');
    }, 2000);
  };

  window.generateModelReport = function() {
    showModal('Generate AI Model Report', `
      <div class="model-report-generation">
        <h4>📊 Generate AI Model Performance Report:</h4>
        <form class="model-report-form">
          <div class="form-group">
            <label>Report Type:</label>
            <select required>
              <option>Performance Summary</option>
              <option>Training Analysis</option>
              <option>Usage Statistics</option>
              <option>Cost-Benefit Analysis</option>
              <option>Comprehensive Report</option>
            </select>
          </div>
          <div class="form-group">
            <label>Time Period:</label>
            <select required>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Year to date</option>
              <option>All time</option>
            </select>
          </div>
          <div class="form-group">
            <label>Include Models:</label>
            <div class="checkbox-group">
              ${mockData.settings_data.system_configuration.ai_models.map(model => `
                <input type="checkbox" id="model-${model.id}" checked>
                <label for="model-${model.id}">${model.name}</label>
              `).join('')}
            </div>
          </div>
          <div class="form-group">
            <label>Report Format:</label>
            <select>
              <option>PDF</option>
              <option>Excel</option>
              <option>PowerPoint</option>
              <option>JSON</option>
            </select>
          </div>
          <button type="submit" class="btn btn--primary">Generate Report</button>
        </form>
      </div>
    `);
  };

  window.optimizeTrainingSchedule = function() {
    showNotification('🎯 Optimizing AI model training schedule...', 'info');
    setTimeout(() => {
      showNotification('✅ Training schedule optimized for maximum efficiency', 'success');
    }, 3000);
  };

  window.scheduleTraining = function() {
    showModal('Schedule Model Training', `
      <div class="training-scheduling">
        <h4>📅 Schedule AI Model Training:</h4>
        <form class="training-schedule-form">
          <div class="form-group">
            <label>Select Model:</label>
            <select required>
              ${mockData.settings_data.system_configuration.ai_models.map(model => `
                <option value="${model.id}">${model.name}</option>
              `).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>Training Type:</label>
            <select required>
              <option>Incremental Training</option>
              <option>Full Retrain</option>
              <option>Transfer Learning</option>
              <option>Fine-tuning</option>
            </select>
          </div>
          <div class="form-group">
            <label>Scheduled Date & Time:</label>
            <input type="datetime-local" required>
          </div>
          <div class="form-group">
            <label>Training Priority:</label>
            <select>
              <option>Low</option>
              <option>Normal</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>
          <div class="form-group">
            <div class="checkbox-setting">
              <input type="checkbox" id="auto-deploy" checked>
              <label for="auto-deploy">Auto-deploy after successful training</label>
            </div>
          </div>
          <button type="submit" class="btn btn--primary">Schedule Training</button>
        </form>
      </div>
    `);
  };

  window.rescheduleTraining = function(modelId) {
    const model = mockData.settings_data.system_configuration.ai_models.find(m => m.id === modelId);
    if (model) {
      showNotification(`📅 Rescheduling training for ${model.name}...`, 'info');
      setTimeout(() => {
        showNotification(`✅ Training rescheduled for ${model.name}`, 'success');
      }, 1500);
    }
  };

  window.startTrainingNow = function(modelId) {
    const model = mockData.settings_data.system_configuration.ai_models.find(m => m.id === modelId);
    if (model) {
      showNotification(`▶️ Starting immediate training for ${model.name}...`, 'info');
      setTimeout(() => {
        showNotification(`✅ Training started for ${model.name}. Estimated completion: 3 hours`, 'success');
      }, 2000);
    }
  };

  window.analyzeInsight = function(modelId) {
    const model = mockData.settings_data.system_configuration.ai_models.find(m => m.id === modelId);
    const insight = mockData.settings_data.ai_model_management.model_insights.find(i => i.model_id === modelId);
    if (model && insight) {
      showModal(`Analyze Insight - ${model.name}`, `
        <div class="insight-analysis">
          <h4>📊 Detailed Insight Analysis:</h4>
          <div class="analysis-content">
            <div class="insight-details">
              <h5>Insight:</h5>
              <p>${insight.insight}</p>
            </div>
            <div class="impact-analysis">
              <h5>Impact Analysis:</h5>
              <p>${insight.impact}</p>
              <div class="impact-metrics">
                <div class="metric-item">
                  <span class="metric-label">Confidence Level:</span>
                  <span class="metric-value ${getConfidenceClass(insight.confidence)}">${insight.confidence}%</span>
                </div>
                <div class="metric-item">
                  <span class="metric-label">Expected ROI:</span>
                  <span class="metric-value positive">250%</span>
                </div>
                <div class="metric-item">
                  <span class="metric-label">Implementation Time:</span>
                  <span class="metric-value">2-3 weeks</span>
                </div>
              </div>
            </div>
            <div class="recommendation-details">
              <h5>Detailed Recommendation:</h5>
              <p>${insight.recommendation}</p>
              <div class="implementation-steps">
                <h6>Implementation Steps:</h6>
                <ol>
                  <li>Analyze current model performance baseline</li>
                  <li>Prepare enhanced training dataset</li>
                  <li>Implement recommended changes</li>
                  <li>Conduct A/B testing</li>
                  <li>Deploy optimized model</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      `);
    }
  };

  window.implementInsightRecommendation = function(modelId) {
    const model = mockData.settings_data.system_configuration.ai_models.find(m => m.id === modelId);
    const insight = mockData.settings_data.ai_model_management.model_insights.find(i => i.model_id === modelId);
    if (model && insight) {
      showNotification(`✅ Implementing recommendation for ${model.name}...`, 'info');
      setTimeout(() => {
        showNotification(`🚀 Recommendation implemented successfully! Expected impact: ${insight.impact}`, 'success');
      }, 3000);
    }
  };

  // Helper functions for model configuration
  window.updateModelThreshold = function(modelId, value) {
    document.getElementById(`threshold-value-${modelId}`).textContent = value + '%';
    showNotification(`🎯 Confidence threshold updated to ${value}%`, 'success');
  };

  window.updateTrainingFrequency = function(modelId, frequency) {
    showNotification(`📅 Training frequency updated to ${frequency}`, 'success');
  };

  window.updateAutoRetrain = function(modelId, enabled) {
    showNotification(`🤖 Auto retrain ${enabled ? 'enabled' : 'disabled'}`, 'success');
  };

  // Helper functions for accuracy and priority classes
  window.getAccuracyClass = function(accuracy) {
    if (accuracy >= 95) return 'excellent';
    if (accuracy >= 90) return 'very-good';
    if (accuracy >= 85) return 'good';
    if (accuracy >= 80) return 'average';
    return 'poor';
  };

  window.getPriorityClass = function(priority) {
    if (priority >= 90) return 'critical';
    if (priority >= 80) return 'high';
    if (priority >= 60) return 'medium';
    return 'low';
  };
}

// Utility functions for UI interactions
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;

  // Add to page
  document.body.appendChild(notification);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

function showModal(title, content) {
  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3>${title}</h3>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
      </div>
      <div class="modal-body">
        ${content}
      </div>
    </div>
  `;

  // Add to page
  document.body.appendChild(overlay);

  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });
}

// Enhanced helper functions
function getScoreClass(score) {
  if (score >= 90) return 'excellent';
  if (score >= 80) return 'good';
  if (score >= 70) return 'average';
  return 'poor';
}

// Transport Planning view
function renderTransportPlanning() {
  const html = `
    <div class="module-header">
      <div class="module-title">
        <h1>Transport Planning</h1>
        <span class="ai-badge">AI Optimized</span>
      </div>
      <p>AI-driven route optimization, demand forecasting, and dynamic planning</p>
    </div>

    <div class="ai-recommendation">
      <h4>🚀 Dynamic Route Optimization</h4>
      <p>AI has identified 3 route optimizations that could save 5.5 hours and reduce fuel costs by 18%. Routes have been automatically updated based on real-time traffic and weather data.</p>
      <div class="recommendation-actions">
        <button class="btn btn--primary btn--sm" onclick="applyRouteOptimization()">Apply All Optimizations</button>
        <button class="btn btn--outline btn--sm" onclick="viewOptimizationDetails()">View Details</button>
      </div>
    </div>

    <!-- Sub-module Navigation -->
    <div class="sub-nav">
      <button class="sub-nav-item active" onclick="showPlanningSubModule('transport-overview', this)">Transport Overview</button>
      <button class="sub-nav-item" onclick="showPlanningSubModule('order-planning', this)">Order Planning</button>
      <button class="sub-nav-item" onclick="showPlanningSubModule('spot-auction', this)">Spot Auction</button>
    </div>

    <!-- Transport Package Overview Sub-module (Default) -->
    <div id="transport-overview" class="sub-module active">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${mockData.routes.length}</div>
          <div class="stat-label">Active Routes</div>
          <div class="stat-trend positive">+2 optimized today</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(mockData.routes.reduce((sum, r) => sum + r.ai_confidence, 0) / mockData.routes.length)}%</div>
          <div class="stat-label">Avg AI Confidence</div>
          <div class="stat-trend positive">+5% improvement</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.routes.reduce((sum, r) => sum + parseFloat(r.savings.replace('h ', '').replace('m', '')), 0).toFixed(0)}h</div>
          <div class="stat-label">Total Time Savings</div>
          <div class="stat-trend positive">Daily optimization</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">₹${mockData.routes.reduce((sum, r) => sum + parseInt(r.fuel_savings.replace('₹', '').replace(',', '')), 0).toLocaleString()}</div>
          <div class="stat-label">Fuel Cost Savings</div>
          <div class="stat-trend positive">This week</div>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="card">
          <div class="card__header">
            <h3>📊 AI Capacity Planning</h3>
            <div class="card-actions">
              <button class="btn btn--outline btn--sm" onclick="refreshCapacityData()">🔄 Refresh</button>
              <button class="btn btn--primary btn--sm" onclick="runCapacityAnalysis()">📈 Analyze</button>
            </div>
          </div>
          <div class="card__body">
            <div class="chart-container">
              <canvas id="capacityPlanningChart"></canvas>
            </div>
            <div class="capacity-insights">
              <div class="insight-item">
                <span class="insight-label">Current Utilization:</span>
                <span class="insight-value">78%</span>
              </div>
              <div class="insight-item">
                <span class="insight-label">Predicted Peak:</span>
                <span class="insight-value">Next Tuesday 2-4 PM</span>
              </div>
              <div class="insight-item">
                <span class="insight-label">Bottleneck Risk:</span>
                <span class="risk-level medium">Medium</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <h3>🔮 Demand Forecasting</h3>
            <div class="card-actions">
              <button class="btn btn--outline btn--sm" onclick="updateForecast()">📊 Update</button>
            </div>
          </div>
          <div class="card__body">
            <div class="chart-container">
              <canvas id="demandForecastChart"></canvas>
            </div>
            <div class="forecast-summary">
              <div class="forecast-item">
                <span class="forecast-label">Next Week:</span>
                <span class="forecast-value positive">+15% increase</span>
              </div>
              <div class="forecast-item">
                <span class="forecast-label">Peak Season:</span>
                <span class="forecast-value">March-April</span>
              </div>
              <div class="forecast-item">
                <span class="forecast-label">Confidence:</span>
                <span class="confidence-value high">92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>🗺️ AI-Enhanced Route Optimization</h3>
          <div class="card-actions">
            <button class="btn btn--outline btn--sm" onclick="recalculateRoutes()">🔄 Recalculate</button>
            <button class="btn btn--primary btn--sm" onclick="addNewRoute()">+ Add Route</button>
          </div>
        </div>
        <div class="card__body">
          <table class="data-table enhanced">
            <thead>
              <tr>
                <th>Route ID</th>
                <th>Origin → Destination</th>
                <th>Distance</th>
                <th>Time Optimization</th>
                <th>Cost Savings</th>
                <th>AI Confidence</th>
                <th>Weather Impact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${mockData.routes.map(route => `
                <tr class="route-row" data-route-id="${route.id}">
                  <td>
                    <div class="route-id">
                      <strong>${route.id}</strong>
                      <small>Priority: ${route.priority}</small>
                    </div>
                  </td>
                  <td>
                    <div class="route-path">
                      <span>${route.origin} → ${route.destination}</span>
                      <small>${route.alternative_routes} alternatives</small>
                    </div>
                  </td>
                  <td>${route.distance} km</td>
                  <td>
                    <div class="time-optimization">
                      <span class="optimized-time">${route.optimized_time}</span>
                      <span class="time-savings positive">${route.savings} saved</span>
                      <small>Original: ${route.original_time}</small>
                    </div>
                  </td>
                  <td>
                    <div class="cost-savings">
                      <span class="fuel-savings">${route.fuel_savings}</span>
                      <small>₹${route.cost_per_km}/km</small>
                    </div>
                  </td>
                  <td>
                    <div class="confidence-container">
                      <span class="confidence-value ${getConfidenceClass(route.ai_confidence)}">${route.ai_confidence}%</span>
                      <div class="confidence-bar">
                        <div class="confidence-fill" style="width: ${route.ai_confidence}%"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="weather-impact ${route.weather_impact.toLowerCase()}">${route.weather_impact}</span>
                  </td>
                  <td>
                    <div class="action-buttons">
                      <button class="btn btn--sm btn--outline" onclick="viewRouteDetails('${route.id}')">👁️ View</button>
                      <button class="btn btn--sm btn--primary" onclick="optimizeRoute('${route.id}')">🚀 Optimize</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Order Planning Sub-module -->
    <div id="order-planning" class="sub-module">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${mockData.transport_orders.length}</div>
          <div class="stat-label">Active Orders</div>
          <div class="stat-trend positive">+5 today</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(mockData.transport_orders.reduce((sum, o) => sum + o.ai_priority_score, 0) / mockData.transport_orders.length)}</div>
          <div class="stat-label">Avg Priority Score</div>
          <div class="stat-trend positive">AI optimized</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(mockData.transport_orders.reduce((sum, o) => sum + o.delivery_confidence, 0) / mockData.transport_orders.length)}%</div>
          <div class="stat-label">Delivery Confidence</div>
          <div class="stat-trend positive">High accuracy</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">₹${mockData.transport_orders.reduce((sum, o) => sum + parseInt(o.cost_estimate.replace('₹', '').replace(',', '')), 0).toLocaleString()}</div>
          <div class="stat-label">Total Order Value</div>
          <div class="stat-trend positive">This week</div>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>📋 AI-Enhanced Order Planning</h3>
          <div class="card-actions">
            <button class="btn btn--outline btn--sm" onclick="rebalanceOrders()">⚖️ Rebalance</button>
            <button class="btn btn--primary btn--sm" onclick="createNewOrder()">+ New Order</button>
          </div>
        </div>
        <div class="card__body">
          <table class="data-table enhanced">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Route</th>
                <th>AI Priority</th>
                <th>Delivery Prediction</th>
                <th>Cost & Margin</th>
                <th>Risk Factors</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${mockData.transport_orders.map(order => `
                <tr class="order-row" data-order-id="${order.id}">
                  <td>
                    <div class="order-id">
                      <strong>${order.id}</strong>
                      <small>${order.cargo_type}</small>
                    </div>
                  </td>
                  <td>
                    <div class="customer-info">
                      <span>${order.customer}</span>
                      <small>${order.load_weight} kg</small>
                    </div>
                  </td>
                  <td>
                    <div class="route-info">
                      <span>${order.pickup_location} → ${order.delivery_location}</span>
                      <small>Vehicle: ${order.assigned_vehicle}</small>
                    </div>
                  </td>
                  <td>
                    <div class="priority-container">
                      <span class="priority-score ${getScoreClass(order.ai_priority_score)}">${order.ai_priority_score}</span>
                      <div class="priority-bar">
                        <div class="priority-fill" style="width: ${order.ai_priority_score}%"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="delivery-prediction">
                      <span class="delivery-time">${order.estimated_delivery}</span>
                      <span class="confidence-indicator ${getConfidenceClass(order.delivery_confidence)}">${order.delivery_confidence}%</span>
                    </div>
                  </td>
                  <td>
                    <div class="cost-margin">
                      <span class="cost-estimate">${order.cost_estimate}</span>
                      <span class="profit-margin positive">${order.profit_margin}% margin</span>
                    </div>
                  </td>
                  <td>
                    <div class="risk-factors">
                      ${order.risk_factors.map(risk => `<span class="risk-tag">${risk}</span>`).join('')}
                    </div>
                  </td>
                  <td>
                    <div class="action-buttons">
                      <button class="btn btn--sm btn--outline" onclick="viewOrderDetails('${order.id}')">📋 Details</button>
                      <button class="btn btn--sm btn--primary" onclick="optimizeOrder('${order.id}')">🎯 Optimize</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Spot Auction Sub-module -->
    <div id="spot-auction" class="sub-module">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${mockData.spot_auctions.length}</div>
          <div class="stat-label">Active Auctions</div>
          <div class="stat-trend positive">Live bidding</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(mockData.spot_auctions.reduce((sum, a) => sum + a.win_probability, 0) / mockData.spot_auctions.length)}%</div>
          <div class="stat-label">Avg Win Probability</div>
          <div class="stat-trend positive">AI calculated</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">₹${mockData.spot_auctions.reduce((sum, a) => sum + parseInt(a.profit_estimate.replace('₹', '').replace(',', '')), 0).toLocaleString()}</div>
          <div class="stat-label">Potential Profit</div>
          <div class="stat-trend positive">If all won</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.spot_auctions.reduce((sum, a) => sum + a.carrier_count, 0)}</div>
          <div class="stat-label">Total Competitors</div>
          <div class="stat-trend neutral">Market activity</div>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>🎯 AI-Powered Spot Auction Management</h3>
          <div class="card-actions">
            <button class="btn btn--outline btn--sm" onclick="refreshAuctions()">🔄 Refresh</button>
            <button class="btn btn--primary btn--sm" onclick="enableAutoBidding()">🤖 Auto-Bid</button>
          </div>
        </div>
        <div class="card__body">
          <table class="data-table enhanced">
            <thead>
              <tr>
                <th>Auction ID</th>
                <th>Route & Cargo</th>
                <th>Current Bid</th>
                <th>AI Suggestion</th>
                <th>Market Analysis</th>
                <th>Win Probability</th>
                <th>Profit Estimate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${mockData.spot_auctions.map(auction => `
                <tr class="auction-row" data-auction-id="${auction.id}">
                  <td>
                    <div class="auction-id">
                      <strong>${auction.id}</strong>
                      <small>Deadline: ${auction.bidding_deadline}</small>
                    </div>
                  </td>
                  <td>
                    <div class="auction-details">
                      <span class="route">${auction.route}</span>
                      <small>${auction.cargo_type} - ${auction.weight} kg</small>
                      <small>${auction.distance} km</small>
                    </div>
                  </td>
                  <td>
                    <div class="current-bid">
                      <span class="bid-amount">${auction.current_bid}</span>
                      <small>${auction.carrier_count} bidders</small>
                    </div>
                  </td>
                  <td>
                    <div class="ai-suggestion">
                      <span class="suggested-bid">${auction.ai_suggested_bid}</span>
                      <small class="bid-difference ${parseInt(auction.ai_suggested_bid.replace('₹', '').replace(',', '')) > parseInt(auction.current_bid.replace('₹', '').replace(',', '')) ? 'higher' : 'lower'}">
                        ${parseInt(auction.ai_suggested_bid.replace('₹', '').replace(',', '')) > parseInt(auction.current_bid.replace('₹', '').replace(',', '')) ? 'Higher' : 'Lower'} than current
                      </small>
                    </div>
                  </td>
                  <td>
                    <div class="market-analysis">
                      <span class="demand-level ${auction.market_demand.toLowerCase().replace(' ', '-')}">${auction.market_demand}</span>
                      <div class="competition-meter">
                        <span class="competition-label">Competition:</span>
                        <div class="competition-bar">
                          <div class="competition-fill" style="width: ${auction.competition_level * 10}%"></div>
                        </div>
                        <span class="competition-value">${auction.competition_level}/10</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="win-probability">
                      <span class="probability-value ${auction.win_probability > 70 ? 'high' : auction.win_probability > 50 ? 'medium' : 'low'}">${auction.win_probability}%</span>
                      <div class="probability-bar">
                        <div class="probability-fill" style="width: ${auction.win_probability}%"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="profit-estimate">
                      <span class="profit-amount positive">${auction.profit_estimate}</span>
                    </div>
                  </td>
                  <td>
                    <div class="action-buttons">
                      <button class="btn btn--sm btn--outline" onclick="viewAuctionDetails('${auction.id}')">📊 Details</button>
                      <button class="btn btn--sm btn--primary" onclick="placeBid('${auction.id}')">💰 Bid</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>🤖 AI Bidding Recommendations</h3>
        </div>
        <div class="card__body">
          <div class="recommendations-grid">
            ${mockData.spot_auctions.map(auction => `
              <div class="recommendation-card">
                <div class="recommendation-header">
                  <h4>${auction.id}</h4>
                  <span class="recommendation-badge ${auction.win_probability > 70 ? 'recommended' : auction.win_probability > 50 ? 'consider' : 'avoid'}">
                    ${auction.win_probability > 70 ? 'Recommended' : auction.win_probability > 50 ? 'Consider' : 'Avoid'}
                  </span>
                </div>
                <div class="recommendation-content">
                  <p>${auction.ai_recommendation}</p>
                  <div class="recommendation-metrics">
                    <div class="metric">
                      <span class="metric-label">Suggested Bid:</span>
                      <span class="metric-value">${auction.ai_suggested_bid}</span>
                    </div>
                    <div class="metric">
                      <span class="metric-label">Expected Profit:</span>
                      <span class="metric-value positive">${auction.profit_estimate}</span>
                    </div>
                    <div class="metric">
                      <span class="metric-label">Risk Level:</span>
                      <span class="risk-level ${auction.competition_level > 7 ? 'high' : auction.competition_level > 4 ? 'medium' : 'low'}">
                        ${auction.competition_level > 7 ? 'High' : auction.competition_level > 4 ? 'Medium' : 'Low'}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="recommendation-actions">
                  <button class="btn btn--sm btn--primary" onclick="acceptAIBid('${auction.id}')">Accept AI Bid</button>
                  <button class="btn btn--sm btn--outline" onclick="customizeBid('${auction.id}')">Customize</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  contentArea.innerHTML = html;

  // Initialize charts and interactions
  setTimeout(() => {
    createDemandForecastChart();
    createCapacityPlanningChart();
    setupTransportPlanningInteractions();
  }, 100);
}

// Transport Execution view
function renderTransportExecution() {
  const html = `
    <div class="module-header">
      <div class="module-title">
        <h1>Transport Execution</h1>
        <span class="ai-badge">AI Monitored</span>
      </div>
      <p>Real-time tracking, predictive ETAs, and intelligent exception handling</p>
    </div>

    <div class="ai-recommendation">
      <h4>🚨 AI Exception Alert</h4>
      <p>Vehicle TRK003 has encountered an exception. AI recommends immediate inspection and backup vehicle deployment. Estimated delay: 3.5 hours without intervention.</p>
      <div class="recommendation-actions">
        <button class="btn btn--primary btn--sm" onclick="handleException('EO003')">Handle Exception</button>
        <button class="btn btn--outline btn--sm" onclick="viewExceptionDetails('EO003')">View Details</button>
      </div>
    </div>

    <!-- Sub-module Navigation -->
    <div class="sub-nav">
      <button class="sub-nav-item active" onclick="showExecutionSubModule('order-overview', this)">Order Overview</button>
      <button class="sub-nav-item" onclick="showExecutionSubModule('dock-management', this)">Dock Management</button>
      <button class="sub-nav-item" onclick="showExecutionSubModule('operations', this)">Operations</button>
      <button class="sub-nav-item" onclick="showExecutionSubModule('tracking', this)">Tracking</button>
    </div>

    <!-- Transport Order Overview Sub-module (Default) -->
    <div id="order-overview" class="sub-module active">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${mockData.execution_orders.length}</div>
          <div class="stat-label">Active Orders</div>
          <div class="stat-trend positive">Real-time tracking</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(mockData.execution_orders.reduce((sum, o) => sum + o.eta_confidence, 0) / mockData.execution_orders.length)}%</div>
          <div class="stat-label">Avg ETA Confidence</div>
          <div class="stat-trend positive">AI predicted</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.execution_orders.filter(o => o.exceptions.length === 0).length}</div>
          <div class="stat-label">No Exceptions</div>
          <div class="stat-trend positive">Smooth operations</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(mockData.execution_orders.reduce((sum, o) => sum + o.progress, 0) / mockData.execution_orders.length)}%</div>
          <div class="stat-label">Avg Progress</div>
          <div class="stat-trend positive">On schedule</div>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>🚛 Real-Time Order Execution</h3>
          <div class="card-actions">
            <button class="btn btn--outline btn--sm" onclick="refreshOrderStatus()">🔄 Refresh</button>
            <button class="btn btn--primary btn--sm" onclick="enableAutoRefresh()">⚡ Auto-Refresh</button>
          </div>
        </div>
        <div class="card__body">
          <table class="data-table enhanced">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status & Progress</th>
                <th>Current Location</th>
                <th>ETA Prediction</th>
                <th>Exceptions</th>
                <th>AI Recommendations</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${mockData.execution_orders.map(order => `
                <tr class="execution-row ${order.exceptions.length > 0 ? 'has-exception' : ''}" data-order-id="${order.id}">
                  <td>
                    <div class="order-info">
                      <strong>${order.id}</strong>
                      <small>Vehicle: ${order.vehicle}</small>
                      <small>Driver: ${order.driver}</small>
                    </div>
                  </td>
                  <td>
                    <div class="customer-info">
                      <span>${order.customer}</span>
                      <small>To: ${order.destination}</small>
                    </div>
                  </td>
                  <td>
                    <div class="status-progress">
                      <span class="execution-status ${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span>
                      <div class="progress-container">
                        <div class="progress-bar">
                          <div class="progress-fill" style="width: ${order.progress}%"></div>
                        </div>
                        <span class="progress-text">${order.progress}%</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="location-info">
                      <span class="current-location">${order.current_location}</span>
                      <div class="cargo-condition">
                        <small>Condition: ${order.cargo_condition}</small>
                        <small>Temp: ${order.temperature}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="eta-prediction">
                      <span class="predicted-eta">${order.actual_eta_prediction}</span>
                      <div class="eta-details">
                        <span class="confidence-indicator ${getConfidenceClass(order.eta_confidence)}">${order.eta_confidence}% confidence</span>
                        <span class="delay-risk ${order.delay_risk.toLowerCase().replace(' ', '-')}">${order.delay_risk} risk</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="exceptions-list">
                      ${order.exceptions.length === 0 ?
                        '<span class="no-exceptions">✅ None</span>' :
                        order.exceptions.map(exc => `
                          <div class="exception-item ${exc.severity.toLowerCase()}">
                            <span class="exception-type">${exc.type}</span>
                            <small>${exc.description}</small>
                          </div>
                        `).join('')
                      }
                    </div>
                  </td>
                  <td>
                    <div class="ai-recommendations-list">
                      ${order.ai_recommendations.slice(0, 2).map(rec => `
                        <div class="recommendation-item">💡 ${rec}</div>
                      `).join('')}
                    </div>
                  </td>
                  <td>
                    <div class="action-buttons">
                      <button class="btn btn--sm btn--outline" onclick="trackOrder('${order.id}')">📍 Track</button>
                      <button class="btn btn--sm btn--primary" onclick="manageOrder('${order.id}')">⚙️ Manage</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Dock Management Sub-module -->
    <div id="dock-management" class="sub-module">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${mockData.dock_operations.length}</div>
          <div class="stat-label">Active Docks</div>
          <div class="stat-trend positive">All operational</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(mockData.dock_operations.reduce((sum, d) => sum + d.utilization, 0) / mockData.dock_operations.length)}%</div>
          <div class="stat-label">Avg Utilization</div>
          <div class="stat-trend positive">Optimized</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(mockData.dock_operations.reduce((sum, d) => sum + d.ai_efficiency_score, 0) / mockData.dock_operations.length)}</div>
          <div class="stat-label">AI Efficiency Score</div>
          <div class="stat-trend positive">High performance</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.dock_operations.reduce((sum, d) => sum + parseFloat(d.average_turnaround), 0).toFixed(1)}h</div>
          <div class="stat-label">Avg Turnaround</div>
          <div class="stat-trend positive">Improved</div>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>🏭 AI-Powered Dock Management</h3>
          <div class="card-actions">
            <button class="btn btn--outline btn--sm" onclick="optimizeDockSchedule()">🎯 Optimize</button>
            <button class="btn btn--primary btn--sm" onclick="addDockSlot()">+ Add Slot</button>
          </div>
        </div>
        <div class="card__body">
          <div class="dock-grid">
            ${mockData.dock_operations.map(dock => `
              <div class="dock-card ${dock.status.toLowerCase()}">
                <div class="dock-header">
                  <h4>${dock.name}</h4>
                  <span class="dock-status ${dock.status.toLowerCase()}">${dock.status}</span>
                </div>
                <div class="dock-metrics">
                  <div class="metric-row">
                    <span class="metric-label">Capacity:</span>
                    <span class="metric-value">${dock.current_occupancy}/${dock.capacity}</span>
                  </div>
                  <div class="utilization-bar">
                    <div class="utilization-fill" style="width: ${dock.utilization}%"></div>
                  </div>
                  <div class="metric-row">
                    <span class="metric-label">Utilization:</span>
                    <span class="metric-value">${dock.utilization}%</span>
                  </div>
                  <div class="metric-row">
                    <span class="metric-label">AI Score:</span>
                    <span class="ai-score ${getScoreClass(dock.ai_efficiency_score)}">${dock.ai_efficiency_score}</span>
                  </div>
                  <div class="metric-row">
                    <span class="metric-label">Congestion:</span>
                    <span class="congestion-level ${dock.congestion_level.toLowerCase()}">${dock.congestion_level}</span>
                  </div>
                  <div class="metric-row">
                    <span class="metric-label">Next Slot:</span>
                    <span class="next-slot">${dock.next_available_slot}</span>
                  </div>
                </div>
                <div class="dock-operations">
                  <h5>Active Operations:</h5>
                  ${dock.active_operations.map(op => `
                    <div class="operation-item">
                      <span class="vehicle-id">${op.vehicle}</span>
                      <span class="operation-type">${op.operation}</span>
                      <div class="operation-progress">
                        <div class="progress-bar small">
                          <div class="progress-fill" style="width: ${op.progress}%"></div>
                        </div>
                        <span class="eta-completion">${op.eta_completion}</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
                <div class="dock-recommendations">
                  <h5>🤖 AI Recommendations:</h5>
                  ${dock.ai_recommendations.map(rec => `
                    <div class="recommendation-item">💡 ${rec}</div>
                  `).join('')}
                </div>
                <div class="dock-actions">
                  <button class="btn btn--sm btn--outline" onclick="viewDockDetails('${dock.id}')">📊 Details</button>
                  <button class="btn btn--sm btn--primary" onclick="manageDock('${dock.id}')">⚙️ Manage</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Operations Sub-module -->
    <div id="operations" class="sub-module">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${mockData.operational_metrics.real_time_efficiency}%</div>
          <div class="stat-label">Real-Time Efficiency</div>
          <div class="stat-trend positive">+${mockData.operational_metrics.performance_improvement}% today</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.operational_metrics.exception_resolution_time}</div>
          <div class="stat-label">Avg Resolution Time</div>
          <div class="stat-trend positive">15% faster</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.operational_metrics.automated_decisions}</div>
          <div class="stat-label">AI Decisions Today</div>
          <div class="stat-trend positive">87% automated</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">₹${mockData.operational_metrics.cost_savings_today.toLocaleString()}</div>
          <div class="stat-label">Cost Savings Today</div>
          <div class="stat-trend positive">AI optimized</div>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="card">
          <div class="card__header">
            <h3>⚡ AI-Driven Operational Efficiency</h3>
            <div class="card-actions">
              <button class="btn btn--outline btn--sm" onclick="runEfficiencyAnalysis()">📈 Analyze</button>
              <button class="btn btn--primary btn--sm" onclick="optimizeWorkflow()">🚀 Optimize</button>
            </div>
          </div>
          <div class="card__body">
            <div class="efficiency-metrics">
              <div class="metric-card">
                <div class="metric-icon">🤖</div>
                <div class="metric-content">
                  <h4>AI Automation Rate</h4>
                  <div class="metric-value">${Math.round((mockData.operational_metrics.automated_decisions / (mockData.operational_metrics.automated_decisions + mockData.operational_metrics.manual_interventions)) * 100)}%</div>
                  <div class="metric-trend positive">+12% this week</div>
                </div>
              </div>
              <div class="metric-card">
                <div class="metric-icon">🎯</div>
                <div class="metric-content">
                  <h4>Decision Accuracy</h4>
                  <div class="metric-value">${mockData.operational_metrics.ai_accuracy}%</div>
                  <div class="metric-trend positive">Excellent</div>
                </div>
              </div>
              <div class="metric-card">
                <div class="metric-icon">⚡</div>
                <div class="metric-content">
                  <h4>Response Time</h4>
                  <div class="metric-value">${mockData.operational_metrics.exception_resolution_time}</div>
                  <div class="metric-trend positive">25% faster</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <h3>🔄 Intelligent Workflow Optimization</h3>
          </div>
          <div class="card__body">
            <div class="workflow-optimization">
              <div class="optimization-item">
                <div class="optimization-header">
                  <h5>Resource Allocation</h5>
                  <span class="optimization-status optimized">Optimized</span>
                </div>
                <p>AI has redistributed 15 tasks for 23% efficiency improvement</p>
                <div class="optimization-impact">
                  <span class="impact-metric">Time Saved: 2.5 hours</span>
                  <span class="impact-metric">Cost Saved: ₹3,200</span>
                </div>
              </div>
              <div class="optimization-item">
                <div class="optimization-header">
                  <h5>Process Automation</h5>
                  <span class="optimization-status in-progress">In Progress</span>
                </div>
                <p>Automating 8 manual processes, 60% complete</p>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 60%"></div>
                </div>
              </div>
              <div class="optimization-item">
                <div class="optimization-header">
                  <h5>Performance Monitoring</h5>
                  <span class="optimization-status active">Active</span>
                </div>
                <p>Real-time monitoring of 47 KPIs with predictive alerts</p>
                <div class="monitoring-stats">
                  <span class="stat-item">12 Alerts Today</span>
                  <span class="stat-item">3 Proactive Actions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tracking Sub-module -->
    <div id="tracking" class="sub-module">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${mockData.tracking_analytics.total_shipments_tracked}</div>
          <div class="stat-label">Shipments Tracked</div>
          <div class="stat-trend positive">Real-time</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.tracking_analytics.prediction_accuracy}%</div>
          <div class="stat-label">Prediction Accuracy</div>
          <div class="stat-trend positive">AI powered</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.tracking_analytics.anomalies_detected}</div>
          <div class="stat-label">Anomalies Detected</div>
          <div class="stat-trend neutral">Auto-resolved</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.tracking_analytics.customer_satisfaction}</div>
          <div class="stat-label">Customer Satisfaction</div>
          <div class="stat-trend positive">Excellent</div>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="card">
          <div class="card__header">
            <h3>📍 AI-Powered Predictive Tracking</h3>
            <div class="card-actions">
              <button class="btn btn--outline btn--sm" onclick="refreshTracking()">🔄 Refresh</button>
              <button class="btn btn--primary btn--sm" onclick="enablePredictiveMode()">🔮 Predictive Mode</button>
            </div>
          </div>
          <div class="card__body">
            <div class="tracking-overview">
              <div class="tracking-metric">
                <div class="metric-icon">🎯</div>
                <div class="metric-details">
                  <h4>ETA Accuracy</h4>
                  <div class="metric-value">${mockData.tracking_analytics.prediction_accuracy}%</div>
                  <div class="metric-variance">Variance: ${mockData.tracking_analytics.eta_variance}</div>
                </div>
              </div>
              <div class="tracking-metric">
                <div class="metric-icon">🚨</div>
                <div class="metric-details">
                  <h4>Proactive Alerts</h4>
                  <div class="metric-value">${mockData.tracking_analytics.proactive_alerts_sent}</div>
                  <div class="metric-description">Sent today</div>
                </div>
              </div>
              <div class="tracking-metric">
                <div class="metric-icon">🔍</div>
                <div class="metric-details">
                  <h4>Anomaly Detection</h4>
                  <div class="metric-value">${mockData.tracking_analytics.anomalies_detected}</div>
                  <div class="metric-description">Detected & resolved</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <h3>🗺️ Live Tracking Dashboard</h3>
            <div class="card-actions">
              <button class="btn btn--outline btn--sm" onclick="viewMapView()">🗺️ Map View</button>
            </div>
          </div>
          <div class="card__body">
            <div class="live-tracking">
              ${mockData.execution_orders.map(order => `
                <div class="tracking-item ${order.status.toLowerCase().replace(' ', '-')}">
                  <div class="tracking-header">
                    <div class="order-info">
                      <h5>${order.id} - ${order.customer}</h5>
                      <span class="tracking-status ${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span>
                    </div>
                    <div class="tracking-progress">
                      <div class="progress-circle">
                        <div class="progress-value">${order.progress}%</div>
                      </div>
                    </div>
                  </div>
                  <div class="tracking-details">
                    <div class="location-timeline">
                      ${order.tracking_updates.map((update, index) => `
                        <div class="timeline-item ${index === order.tracking_updates.length - 1 ? 'current' : 'completed'}">
                          <div class="timeline-marker"></div>
                          <div class="timeline-content">
                            <div class="timeline-time">${update.time}</div>
                            <div class="timeline-location">${update.location}</div>
                            <div class="timeline-status">${update.status}</div>
                          </div>
                        </div>
                      `).join('')}
                      <div class="timeline-item future">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                          <div class="timeline-time">${order.actual_eta_prediction.split(' ')[1]}</div>
                          <div class="timeline-location">${order.destination}</div>
                          <div class="timeline-status">Expected Arrival</div>
                        </div>
                      </div>
                    </div>
                    <div class="tracking-insights">
                      <div class="insight-item">
                        <span class="insight-label">ETA Confidence:</span>
                        <span class="confidence-value ${getConfidenceClass(order.eta_confidence)}">${order.eta_confidence}%</span>
                      </div>
                      <div class="insight-item">
                        <span class="insight-label">Delay Risk:</span>
                        <span class="risk-level ${order.delay_risk.toLowerCase().replace(' ', '-')}">${order.delay_risk}</span>
                      </div>
                      <div class="insight-item">
                        <span class="insight-label">Security:</span>
                        <span class="security-status">${order.security_status}</span>
                      </div>
                    </div>
                  </div>
                  <div class="tracking-actions">
                    <button class="btn btn--sm btn--outline" onclick="viewDetailedTracking('${order.id}')">📊 Details</button>
                    <button class="btn btn--sm btn--primary" onclick="sendCustomerUpdate('${order.id}')">📧 Notify Customer</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>🤖 AI Tracking Intelligence</h3>
        </div>
        <div class="card__body">
          <div class="intelligence-grid">
            <div class="intelligence-card">
              <div class="intelligence-icon">🔮</div>
              <div class="intelligence-content">
                <h4>Predictive ETA</h4>
                <p>AI analyzes traffic, weather, and historical data to predict accurate arrival times</p>
                <div class="intelligence-stats">
                  <span class="stat">91% accuracy</span>
                  <span class="stat">±8 min variance</span>
                </div>
              </div>
            </div>
            <div class="intelligence-card">
              <div class="intelligence-icon">🚨</div>
              <div class="intelligence-content">
                <h4>Anomaly Detection</h4>
                <p>Real-time monitoring detects unusual patterns and potential issues</p>
                <div class="intelligence-stats">
                  <span class="stat">12 detected today</span>
                  <span class="stat">100% resolved</span>
                </div>
              </div>
            </div>
            <div class="intelligence-card">
              <div class="intelligence-icon">📍</div>
              <div class="intelligence-content">
                <h4>Location Optimization</h4>
                <p>Dynamic route adjustments based on real-time conditions</p>
                <div class="intelligence-stats">
                  <span class="stat">15% time saved</span>
                  <span class="stat">Real-time updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  contentArea.innerHTML = html;

  // Initialize execution interactions
  setTimeout(() => {
    setupTransportExecutionInteractions();
  }, 100);
}

// Reviews & Analytics view
function renderReviewsAnalytics() {
  const html = `
    <div class="module-header">
      <div class="module-title">
        <h1>Reviews & Analytics</h1>
        <span class="ai-badge">AI Insights</span>
      </div>
      <p>AI-powered analytics, performance insights, and predictive reporting</p>
    </div>

    <div class="ai-recommendation">
      <h4>📊 AI Analytics Insight</h4>
      <p>AI analysis shows 23% cost reduction opportunity through carrier optimization and route consolidation. Implementing recommendations could save ₹46.2L annually.</p>
      <div class="recommendation-actions">
        <button class="btn btn--primary btn--sm" onclick="implementAnalyticsRecommendations()">Implement Recommendations</button>
        <button class="btn btn--outline btn--sm" onclick="viewDetailedAnalysis()">View Detailed Analysis</button>
      </div>
    </div>

    <!-- Sub-module Navigation -->
    <div class="sub-nav">
      <button class="sub-nav-item active" onclick="showAnalyticsSubModule('order-analytics', this)">Order Analytics</button>
      <button class="sub-nav-item" onclick="showAnalyticsSubModule('carrier-performance', this)">Carrier Performance</button>
      <button class="sub-nav-item" onclick="showAnalyticsSubModule('cost-analysis', this)">Cost Analysis</button>
    </div>

    <!-- Transport Order Analytics Sub-module (Default) -->
    <div id="order-analytics" class="sub-module active">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${mockData.analytics_data.transport_order_analytics.total_orders}</div>
          <div class="stat-label">Total Orders</div>
          <div class="stat-trend positive">+${mockData.analytics_data.transport_order_analytics.trend_analysis.weekly_growth}% this week</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.analytics_data.transport_order_analytics.completion_rate}%</div>
          <div class="stat-label">Completion Rate</div>
          <div class="stat-trend positive">+${mockData.analytics_data.transport_order_analytics.trend_analysis.efficiency_improvement}% efficiency</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.analytics_data.transport_order_analytics.on_time_delivery_rate}%</div>
          <div class="stat-label">On-Time Delivery</div>
          <div class="stat-trend positive">Industry leading</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.analytics_data.transport_order_analytics.profit_margin}%</div>
          <div class="stat-label">Profit Margin</div>
          <div class="stat-trend positive">+${mockData.analytics_data.transport_order_analytics.ai_optimization_impact}% AI impact</div>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="card">
          <div class="card__header">
            <h3>📈 AI-Powered Performance Dashboard</h3>
            <div class="card-actions">
              <button class="btn btn--outline btn--sm" onclick="refreshAnalytics()">🔄 Refresh</button>
              <button class="btn btn--primary btn--sm" onclick="generateReport()">📊 Generate Report</button>
            </div>
          </div>
          <div class="card__body">
            <div class="chart-container">
              <canvas id="performanceTrendChart"></canvas>
            </div>
            <div class="chart-insights">
              <div class="insight-item">
                <span class="insight-label">Trend:</span>
                <span class="insight-value positive">+${mockData.analytics_data.transport_order_analytics.trend_analysis.monthly_growth}% monthly growth</span>
              </div>
              <div class="insight-item">
                <span class="insight-label">Prediction:</span>
                <span class="insight-value">Continued growth expected</span>
              </div>
              <div class="insight-item">
                <span class="insight-label">AI Confidence:</span>
                <span class="confidence-value high">94%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <h3>🎯 Intelligent Trend Analysis</h3>
          </div>
          <div class="card__body">
            <div class="trend-metrics">
              <div class="trend-item">
                <div class="trend-header">
                  <h4>Delivery Performance</h4>
                  <span class="trend-indicator positive">↗️ +15%</span>
                </div>
                <div class="trend-details">
                  <p>AI route optimization improved delivery speed by 15% this month</p>
                  <div class="trend-bar">
                    <div class="trend-fill positive" style="width: 85%"></div>
                  </div>
                </div>
              </div>
              <div class="trend-item">
                <div class="trend-header">
                  <h4>Cost Efficiency</h4>
                  <span class="trend-indicator positive">↗️ +23%</span>
                </div>
                <div class="trend-details">
                  <p>Load consolidation algorithms reduced costs by 23%</p>
                  <div class="trend-bar">
                    <div class="trend-fill positive" style="width: 92%"></div>
                  </div>
                </div>
              </div>
              <div class="trend-item">
                <div class="trend-header">
                  <h4>Customer Satisfaction</h4>
                  <span class="trend-indicator positive">↗️ +18%</span>
                </div>
                <div class="trend-details">
                  <p>Predictive ETAs improved customer satisfaction by 18%</p>
                  <div class="trend-bar">
                    <div class="trend-fill positive" style="width: 88%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>🔍 AI Performance Insights</h3>
          <div class="card-actions">
            <button class="btn btn--outline btn--sm" onclick="exportInsights()">📤 Export</button>
          </div>
        </div>
        <div class="card__body">
          <div class="insights-grid">
            ${mockData.analytics_data.transport_order_analytics.performance_insights.map(insight => `
              <div class="insight-card">
                <div class="insight-metric">${insight.metric}</div>
                <div class="insight-improvement ${insight.improvement.startsWith('+') ? 'positive' : 'negative'}">${insight.improvement}</div>
                <div class="insight-contribution">AI Contribution: ${insight.ai_contribution}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Carrier Performance Sub-module -->
    <div id="carrier-performance" class="sub-module">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">${mockData.analytics_data.carrier_performance.length}</div>
          <div class="stat-label">Active Carriers</div>
          <div class="stat-trend positive">Performance tracked</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(mockData.analytics_data.carrier_performance.reduce((sum, c) => sum + c.ai_performance_score, 0) / mockData.analytics_data.carrier_performance.length)}</div>
          <div class="stat-label">Avg AI Score</div>
          <div class="stat-trend positive">Above benchmark</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round(mockData.analytics_data.carrier_performance.reduce((sum, c) => sum + c.on_time_rate, 0) / mockData.analytics_data.carrier_performance.length)}%</div>
          <div class="stat-label">Avg On-Time Rate</div>
          <div class="stat-trend positive">Industry leading</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.analytics_data.carrier_performance.filter(c => c.reliability_trend === 'improving').length}</div>
          <div class="stat-label">Improving Carriers</div>
          <div class="stat-trend positive">Positive trend</div>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>🏆 AI-Driven Carrier Scoring</h3>
          <div class="card-actions">
            <button class="btn btn--outline btn--sm" onclick="recalculateScores()">🔄 Recalculate</button>
            <button class="btn btn--primary btn--sm" onclick="benchmarkCarriers()">📊 Benchmark</button>
          </div>
        </div>
        <div class="card__body">
          <table class="data-table enhanced">
            <thead>
              <tr>
                <th>Carrier</th>
                <th>AI Performance Score</th>
                <th>On-Time Rate</th>
                <th>Cost Efficiency</th>
                <th>Damage Rate</th>
                <th>Trend</th>
                <th>AI Recommendations</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${mockData.analytics_data.carrier_performance.map(carrier => `
                <tr class="carrier-analytics-row">
                  <td>
                    <div class="carrier-info">
                      <strong>${carrier.name}</strong>
                      <small>${carrier.total_shipments} shipments</small>
                    </div>
                  </td>
                  <td>
                    <div class="score-container">
                      <span class="ai-score ${getScoreClass(carrier.ai_performance_score)}">${carrier.ai_performance_score}</span>
                      <div class="score-bar">
                        <div class="score-fill" style="width: ${carrier.ai_performance_score}%"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="rate-container">
                      <span class="rate-value">${carrier.on_time_rate}%</span>
                      <small>${carrier.on_time_deliveries}/${carrier.total_shipments}</small>
                    </div>
                  </td>
                  <td>
                    <div class="efficiency-container">
                      <span class="efficiency-score ${getScoreClass(carrier.cost_efficiency_score)}">${carrier.cost_efficiency_score}</span>
                      <small>₹${carrier.average_cost.toLocaleString()} avg</small>
                    </div>
                  </td>
                  <td>
                    <div class="damage-container">
                      <span class="damage-rate ${carrier.damage_rate < 1 ? 'good' : carrier.damage_rate < 2 ? 'average' : 'poor'}">${carrier.damage_rate}%</span>
                      <small>${carrier.damage_incidents} incidents</small>
                    </div>
                  </td>
                  <td>
                    <span class="trend-indicator ${carrier.reliability_trend}">${carrier.reliability_trend}</span>
                  </td>
                  <td>
                    <div class="recommendations-preview">
                      ${carrier.ai_recommendations.slice(0, 1).map(rec => `
                        <div class="recommendation-item">💡 ${rec}</div>
                      `).join('')}
                      ${carrier.ai_recommendations.length > 1 ? `<small>+${carrier.ai_recommendations.length - 1} more</small>` : ''}
                    </div>
                  </td>
                  <td>
                    <div class="action-buttons">
                      <button class="btn btn--sm btn--outline" onclick="viewCarrierAnalytics('${carrier.id}')">📊 Analytics</button>
                      <button class="btn btn--sm btn--primary" onclick="optimizeCarrierPerformance('${carrier.id}')">🚀 Optimize</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>📈 Performance Benchmarking</h3>
        </div>
        <div class="card__body">
          <div class="benchmark-grid">
            ${mockData.analytics_data.carrier_performance.map(carrier => `
              <div class="benchmark-card">
                <div class="benchmark-header">
                  <h4>${carrier.name}</h4>
                  <span class="benchmark-score ${getScoreClass(carrier.ai_performance_score)}">${carrier.ai_performance_score}</span>
                </div>
                <div class="benchmark-metrics">
                  <div class="benchmark-item">
                    <span class="metric-label">30 Days:</span>
                    <span class="metric-trend ${carrier.performance_trends.last_30_days.on_time > carrier.performance_trends.last_90_days.on_time ? 'positive' : 'negative'}">
                      ${carrier.performance_trends.last_30_days.on_time}%
                    </span>
                  </div>
                  <div class="benchmark-item">
                    <span class="metric-label">90 Days:</span>
                    <span class="metric-value">${carrier.performance_trends.last_90_days.on_time}%</span>
                  </div>
                  <div class="benchmark-item">
                    <span class="metric-label">YTD:</span>
                    <span class="metric-value">${carrier.performance_trends.year_to_date.on_time}%</span>
                  </div>
                </div>
                <div class="benchmark-rating">
                  <div class="rating-stars">
                    ${'★'.repeat(Math.floor(carrier.customer_rating))}${'☆'.repeat(5-Math.floor(carrier.customer_rating))}
                  </div>
                  <span class="rating-value">${carrier.customer_rating}/5</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Cost Analysis Sub-module -->
    <div id="cost-analysis" class="sub-module">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">₹${(mockData.analytics_data.cost_analysis.total_transport_cost / 10000000).toFixed(1)}Cr</div>
          <div class="stat-label">Total Transport Cost</div>
          <div class="stat-trend negative">${mockData.analytics_data.cost_analysis.cost_trends.monthly_change}% this month</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">₹${(mockData.analytics_data.cost_analysis.ai_cost_savings / 10000000).toFixed(1)}Cr</div>
          <div class="stat-label">AI Cost Savings</div>
          <div class="stat-trend positive">24% reduction</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">₹${mockData.analytics_data.cost_analysis.cost_per_km}</div>
          <div class="stat-label">Cost per KM</div>
          <div class="stat-trend positive">Optimized</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${mockData.analytics_data.cost_analysis.cost_optimization_opportunities.length}</div>
          <div class="stat-label">Optimization Opportunities</div>
          <div class="stat-trend positive">AI identified</div>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="card">
          <div class="card__header">
            <h3>💰 AI-Powered Cost Analysis</h3>
            <div class="card-actions">
              <button class="btn btn--outline btn--sm" onclick="refreshCostData()">🔄 Refresh</button>
              <button class="btn btn--primary btn--sm" onclick="generateCostReport()">📊 Report</button>
            </div>
          </div>
          <div class="card__body">
            <div class="cost-breakdown">
              <div class="cost-item">
                <div class="cost-category">Fuel Costs</div>
                <div class="cost-amount">₹${(mockData.analytics_data.cost_analysis.fuel_costs / 10000000).toFixed(1)}Cr</div>
                <div class="cost-percentage">${Math.round((mockData.analytics_data.cost_analysis.fuel_costs / mockData.analytics_data.cost_analysis.total_transport_cost) * 100)}%</div>
                <div class="cost-bar">
                  <div class="cost-fill" style="width: ${(mockData.analytics_data.cost_analysis.fuel_costs / mockData.analytics_data.cost_analysis.total_transport_cost) * 100}%"></div>
                </div>
              </div>
              <div class="cost-item">
                <div class="cost-category">Labor Costs</div>
                <div class="cost-amount">₹${(mockData.analytics_data.cost_analysis.labor_costs / 10000000).toFixed(1)}Cr</div>
                <div class="cost-percentage">${Math.round((mockData.analytics_data.cost_analysis.labor_costs / mockData.analytics_data.cost_analysis.total_transport_cost) * 100)}%</div>
                <div class="cost-bar">
                  <div class="cost-fill" style="width: ${(mockData.analytics_data.cost_analysis.labor_costs / mockData.analytics_data.cost_analysis.total_transport_cost) * 100}%"></div>
                </div>
              </div>
              <div class="cost-item">
                <div class="cost-category">Maintenance Costs</div>
                <div class="cost-amount">₹${(mockData.analytics_data.cost_analysis.maintenance_costs / 10000000).toFixed(1)}Cr</div>
                <div class="cost-percentage">${Math.round((mockData.analytics_data.cost_analysis.maintenance_costs / mockData.analytics_data.cost_analysis.total_transport_cost) * 100)}%</div>
                <div class="cost-bar">
                  <div class="cost-fill" style="width: ${(mockData.analytics_data.cost_analysis.maintenance_costs / mockData.analytics_data.cost_analysis.total_transport_cost) * 100}%"></div>
                </div>
              </div>
              <div class="cost-item">
                <div class="cost-category">Other Costs</div>
                <div class="cost-amount">₹${((mockData.analytics_data.cost_analysis.insurance_costs + mockData.analytics_data.cost_analysis.other_costs) / 10000000).toFixed(1)}Cr</div>
                <div class="cost-percentage">${Math.round(((mockData.analytics_data.cost_analysis.insurance_costs + mockData.analytics_data.cost_analysis.other_costs) / mockData.analytics_data.cost_analysis.total_transport_cost) * 100)}%</div>
                <div class="cost-bar">
                  <div class="cost-fill" style="width: ${((mockData.analytics_data.cost_analysis.insurance_costs + mockData.analytics_data.cost_analysis.other_costs) / mockData.analytics_data.cost_analysis.total_transport_cost) * 100}%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <h3>🎯 Cost Optimization Opportunities</h3>
          </div>
          <div class="card__body">
            <div class="optimization-opportunities">
              ${mockData.analytics_data.cost_analysis.cost_optimization_opportunities.map(opportunity => `
                <div class="opportunity-card">
                  <div class="opportunity-header">
                    <h4>${opportunity.category}</h4>
                    <span class="savings-amount">₹${(opportunity.potential_savings / 100000).toFixed(1)}L</span>
                  </div>
                  <div class="opportunity-details">
                    <div class="effort-indicator">
                      <span class="effort-label">Implementation:</span>
                      <span class="effort-level ${opportunity.implementation_effort.toLowerCase()}">${opportunity.implementation_effort}</span>
                    </div>
                    <div class="savings-percentage">
                      ${Math.round((opportunity.potential_savings / mockData.analytics_data.cost_analysis.total_transport_cost) * 100)}% of total costs
                    </div>
                  </div>
                  <div class="opportunity-actions">
                    <button class="btn btn--sm btn--primary" onclick="implementOptimization('${opportunity.category}')">Implement</button>
                    <button class="btn btn--sm btn--outline" onclick="analyzeOpportunity('${opportunity.category}')">Analyze</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>📊 Route-wise Cost Analysis</h3>
        </div>
        <div class="card__body">
          <table class="data-table enhanced">
            <thead>
              <tr>
                <th>Route</th>
                <th>Total Cost</th>
                <th>Volume</th>
                <th>Cost per Shipment</th>
                <th>Efficiency Rating</th>
                <th>Optimization Potential</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${mockData.analytics_data.cost_analysis.cost_breakdown_by_route.map(route => `
                <tr>
                  <td><strong>${route.route}</strong></td>
                  <td>₹${route.cost.toLocaleString()}</td>
                  <td>${route.volume} shipments</td>
                  <td>₹${route.cost_per_shipment}</td>
                  <td>
                    <span class="efficiency-rating ${route.cost_per_shipment < 300 ? 'excellent' : route.cost_per_shipment < 500 ? 'good' : 'average'}">
                      ${route.cost_per_shipment < 300 ? 'Excellent' : route.cost_per_shipment < 500 ? 'Good' : 'Average'}
                    </span>
                  </td>
                  <td>
                    <span class="optimization-potential">
                      ${route.cost_per_shipment > 500 ? 'High' : route.cost_per_shipment > 300 ? 'Medium' : 'Low'}
                    </span>
                  </td>
                  <td>
                    <div class="action-buttons">
                      <button class="btn btn--sm btn--outline" onclick="analyzeRoute('${route.route}')">📊 Analyze</button>
                      <button class="btn btn--sm btn--primary" onclick="optimizeRouteCost('${route.route}')">🚀 Optimize</button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  contentArea.innerHTML = html;

  // Initialize charts and interactions
  setTimeout(() => {
    createPerformanceTrendChart();
    setupReviewsAnalyticsInteractions();
  }, 100);
}

// Settings view
function renderSettings() {
  const html = `
    <div class="module-header">
      <div class="module-title">
        <h1>Settings</h1>
        <span class="ai-badge">AI Personalized</span>
      </div>
      <p>AI-powered system configuration and personalization</p>
    </div>

    <div class="ai-recommendation">
      <h4>🤖 AI Personalization Insight</h4>
      <p>AI has analyzed your usage patterns and recommends optimizing notification frequency and enabling predictive insights to improve productivity by 40%.</p>
      <div class="recommendation-actions">
        <button class="btn btn--primary btn--sm" onclick="applyAIPersonalization()">Apply AI Recommendations</button>
        <button class="btn btn--outline btn--sm" onclick="viewPersonalizationAnalysis()">View Analysis</button>
      </div>
    </div>

    <!-- Sub-module Navigation -->
    <div class="sub-nav">
      <button class="sub-nav-item active" onclick="showSettingsSubModule('user-preferences', this)">User Preferences</button>
      <button class="sub-nav-item" onclick="showSettingsSubModule('system-config', this)">System Configuration</button>
      <button class="sub-nav-item" onclick="showSettingsSubModule('notifications', this)">Notifications</button>
      <button class="sub-nav-item" onclick="showSettingsSubModule('ai-models', this)">AI Models</button>
    </div>

    <!-- User Preferences Sub-module (Default) -->
    <div id="user-preferences" class="sub-module active">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">Advanced</div>
          <div class="stat-label">AI Assistance Level</div>
          <div class="stat-trend positive">Personalized</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">6</div>
          <div class="stat-label">Active Notifications</div>
          <div class="stat-trend positive">Optimized</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">Enabled</div>
          <div class="stat-label">AI Learning</div>
          <div class="stat-trend positive">Active</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">30s</div>
          <div class="stat-label">Refresh Interval</div>
          <div class="stat-trend positive">Optimized</div>
        </div>
      </div>

      <div class="dashboard-grid">
        <div class="card">
          <div class="card__header">
            <h3>👤 AI-Powered User Personalization</h3>
            <div class="card-actions">
              <button class="btn btn--outline btn--sm" onclick="resetPersonalization()">🔄 Reset</button>
              <button class="btn btn--primary btn--sm" onclick="savePreferences()">💾 Save</button>
            </div>
          </div>
          <div class="card__body">
            <div class="preferences-form">
              <div class="form-section">
                <h4>Personal Information</h4>
                <div class="form-grid">
                  <div class="form-group">
                    <label>Name:</label>
                    <input type="text" value="Abhijit Kumar" readonly>
                  </div>
                  <div class="form-group">
                    <label>Email:</label>
                    <input type="email" value="abhijit.kumar@company.com" readonly>
                  </div>
                  <div class="form-group">
                    <label>Role:</label>
                    <input type="text" value="Transport Manager" readonly>
                  </div>
                  <div class="form-group">
                    <label>Department:</label>
                    <input type="text" value="Logistics" readonly>
                  </div>
                </div>
              </div>

              <div class="form-section">
                <h4>🤖 AI Assistance Settings</h4>
                <div class="form-grid">
                  <div class="form-group">
                    <label>AI Assistance Level:</label>
                    <select onchange="updateAIAssistanceLevel(this.value)">
                      <option value="Basic">Basic</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced" selected>Advanced</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Dashboard Layout:</label>
                    <select onchange="updateDashboardLayout(this.value)">
                      <option value="Simple">Simple</option>
                      <option value="Standard">Standard</option>
                      <option value="Advanced Analytics" selected>Advanced Analytics</option>
                      <option value="Executive">Executive</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Theme:</label>
                    <select onchange="updateTheme(this.value)">
                      <option value="Light" selected>Light</option>
                      <option value="Dark">Dark</option>
                      <option value="Auto">Auto</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Language:</label>
                    <select onchange="updateLanguage(this.value)">
                      <option value="English" selected>English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Spanish">Spanish</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="form-section">
                <h4>🔔 Notification Preferences</h4>
                <div class="notification-grid">
                  <div class="notification-item">
                    <div class="notification-toggle">
                      <input type="checkbox" id="email_notifications" checked onchange="updateNotificationPreference('email_notifications', this.checked)">
                      <label for="email_notifications">Email Notifications</label>
                    </div>
                    <div class="notification-description">Receive notifications via email</div>
                  </div>
                  <div class="notification-item">
                    <div class="notification-toggle">
                      <input type="checkbox" id="push_notifications" checked onchange="updateNotificationPreference('push_notifications', this.checked)">
                      <label for="push_notifications">Push Notifications</label>
                    </div>
                    <div class="notification-description">Browser push notifications</div>
                  </div>
                  <div class="notification-item">
                    <div class="notification-toggle">
                      <input type="checkbox" id="ai_recommendations" checked onchange="updateNotificationPreference('ai_recommendations', this.checked)">
                      <label for="ai_recommendations">AI Recommendations</label>
                    </div>
                    <div class="notification-description">AI-generated recommendations and insights</div>
                  </div>
                </div>
              </div>

              <div class="form-section">
                <h4>🧠 AI Personalization Features</h4>
                <div class="ai-features-grid">
                  <div class="ai-feature-item">
                    <div class="feature-toggle">
                      <input type="checkbox" id="ai_learning_enabled" checked onchange="updateAIFeature('learning_enabled', this.checked)">
                      <label for="ai_learning_enabled">Learning Enabled</label>
                    </div>
                    <div class="feature-description">Allow AI to learn from your usage patterns</div>
                  </div>
                  <div class="ai-feature-item">
                    <div class="feature-toggle">
                      <input type="checkbox" id="ai_auto_suggestions" checked onchange="updateAIFeature('auto_suggestions', this.checked)">
                      <label for="ai_auto_suggestions">Auto Suggestions</label>
                    </div>
                    <div class="feature-description">Automatic suggestions based on context</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card__header">
            <h3>⚡ Performance Preferences</h3>
          </div>
          <div class="card__body">
            <div class="performance-settings">
              <div class="setting-item">
                <label>Auto Refresh Interval:</label>
                <div class="range-input">
                  <input type="range" min="10" max="300" value="30" onchange="updateRefreshInterval(this.value)" id="refresh-range">
                  <span id="refresh-value">30s</span>
                </div>
              </div>
              <div class="setting-item">
                <label>Data Retention Days:</label>
                <div class="range-input">
                  <input type="range" min="30" max="365" value="90" onchange="updateDataRetention(this.value)" id="retention-range">
                  <span id="retention-value">90 days</span>
                </div>
              </div>
              <div class="setting-item">
                <div class="checkbox-setting">
                  <input type="checkbox" id="chart-animation" checked onchange="updateChartAnimation(this.checked)">
                  <label for="chart-animation">Enable Chart Animations</label>
                </div>
              </div>
              <div class="setting-item">
                <div class="checkbox-setting">
                  <input type="checkbox" id="real-time-updates" checked onchange="updateRealTimeUpdates(this.checked)">
                  <label for="real-time-updates">Enable Real-time Updates</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- System Configuration Sub-module -->
    <div id="system-config" class="sub-module">
      <div class="card">
        <div class="card__header">
          <h3>🤖 AI Model Configuration</h3>
        </div>
        <div class="card__body">
          <p>System Configuration features are being loaded...</p>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-value">4</div>
              <div class="stat-label">Active AI Models</div>
              <div class="stat-trend positive">Optimized</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">92.6%</div>
              <div class="stat-label">Avg Model Accuracy</div>
              <div class="stat-trend positive">High performance</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notifications Sub-module -->
    <div id="notifications" class="sub-module">
      <div class="card">
        <div class="card__header">
          <h3>🔔 AI-Powered Notification Rules</h3>
        </div>
        <div class="card__body">
          <p>Notification management features are being loaded...</p>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-value">12</div>
              <div class="stat-label">Active Rules</div>
              <div class="stat-trend positive">Configured</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">87</div>
              <div class="stat-label">Avg AI Priority</div>
              <div class="stat-trend positive">Optimized</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- AI Models Sub-module -->
    <div id="ai-models" class="sub-module">
      <div class="card">
        <div class="card__header">
          <h3>🧠 AI Model Performance Dashboard</h3>
        </div>
        <div class="card__body">
          <p>AI Model management features are being loaded...</p>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-value">92.6%</div>
              <div class="stat-label">Overall Accuracy</div>
              <div class="stat-trend positive">Excellent</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">₹4.6Cr</div>
              <div class="stat-label">Cost Savings</div>
              <div class="stat-trend positive">AI generated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  contentArea.innerHTML = html;

  // Initialize settings interactions
  setTimeout(() => {
    setupSettingsInteractions();
  }, 100);
}

function createPerformanceTrendChart() {
  const ctx = document.getElementById('performanceTrendChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'On-Time Delivery %',
        data: [88, 92, 89, 94, 96, 94],
        borderColor: '#4ECDC4',
        backgroundColor: 'rgba(78, 205, 196, 0.1)'
      }, {
        label: 'Cost Efficiency %',
        data: [78, 82, 85, 87, 89, 91],
        borderColor: '#FFC185',
        backgroundColor: 'rgba(255, 193, 133, 0.1)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

// Utility functions
function getHealthClass(score) {
  if (score >= 90) return 'excellent';
  if (score >= 75) return 'good';
  return 'poor';
}

function getConfidenceClass(confidence) {
  if (confidence >= 90) return 'confidence-high';
  if (confidence >= 70) return 'confidence-medium';
  return 'confidence-low';
}

function getVehicleRecommendation(vehicle) {
  if (vehicle.health_score < 80) return 'Schedule maintenance';
  if (vehicle.fuel_efficiency < 7.0) return 'Optimize fuel usage';
  return 'Operating optimally';
}

// Chart creation functions
function createVehicleHealthChart() {
  const ctx = document.getElementById('vehicleHealthChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Excellent (90-100%)', 'Good (75-89%)', 'Poor (<75%)'],
      datasets: [{
        data: [1, 1, 1],
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function createRouteOptimizationChart() {
  const ctx = document.getElementById('routeOptimizationChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mumbai-Delhi', 'Bangalore-Chennai', 'Delhi-Kolkata'],
      datasets: [{
        label: 'Time Savings (hours)',
        data: [2.25, 0.75, 3.33],
        backgroundColor: '#1FB8CD'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function createDemandForecastChart() {
  const ctx = document.getElementById('demandForecastChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
      datasets: [{
        label: 'Predicted Demand',
        data: [120, 135, 155, 142, 168],
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function createCapacityPlanningChart() {
  const ctx = document.getElementById('capacityPlanningChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Capacity Utilization',
        data: [75, 85, 78, 92, 88, 65, 45],
        backgroundColor: [
          '#21808d',
          '#c0152f',
          '#21808d',
          '#c0152f',
          '#a84b2f',
          '#21808d',
          '#21808d'
        ],
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        }
      }
    }
  });
}

function createPerformanceTrendChart() {
  const ctx = document.getElementById('performanceTrendChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'On-Time Delivery %',
        data: [89, 91, 94, 92, 95, 94],
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)'
      }, {
        label: 'Cost Efficiency %',
        data: [78, 82, 85, 87, 89, 91],
        borderColor: '#FFC185',
        backgroundColor: 'rgba(255, 193, 133, 0.1)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}