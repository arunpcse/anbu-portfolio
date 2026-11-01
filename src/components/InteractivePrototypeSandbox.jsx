import React, { useState } from "react";
import {
  Sparkles,
  ShoppingBag,
  Tractor,
  Filter,
  CheckCircle,
  Clock,
  MapPin,
  DollarSign,
  Plus,
  Minus,
  Trash2,
  Check,
  Send,
  AlertCircle
} from "lucide-react";
import { MOCK_PRODUCTS, DELIVERY_FORMULA_SPEC } from "../data/portfolioData";

export default function InteractivePrototypeSandbox() {
  const [activeRole, setActiveRole] = useState("consumer"); // 'consumer' or 'farmer'
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [activeFilter, setActiveFilter] = useState("all");
  const [cart, setCart] = useState([
    { id: "p-01", name: "Heritage Roma Tomatoes", price: 3.40, qty: 2, unit: "kg", farm: "Green Valley Farm", distanceKm: 14.8 }
  ]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedProductBreakdown, setSelectedProductBreakdown] = useState(null);

  // Farmer Listing Form State
  const [farmerForm, setFarmerForm] = useState({
    name: "Crisp Organic English Cucumbers",
    category: "Vine Produce",
    harvestTime: "Today at 06:30 AM",
    priceRetail: "2.90",
    priceBulk: "1.80",
    stockKg: "85",
    isSurplus: false,
    surplusDiscount: 25,
  });
  const [farmerSuccessMsg, setFarmerSuccessMsg] = useState(false);

  // Filter products for consumer
  const filteredProducts = products.filter((p) => {
    if (activeFilter === "today") return p.harvestTime.includes("Today");
    if (activeFilter === "surplus") return p.isSurplus;
    if (activeFilter === "organic") return p.isOrganic;
    return true;
  });

  // Cart calculations
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const maxDistance = cart.length > 0 ? Math.max(...cart.map((i) => i.distanceKm)) : 0;
  const billableDistance = Math.max(0, maxDistance - DELIVERY_FORMULA_SPEC.baseDistanceIncludedKm);
  const deliveryFee = cart.length > 0 ? Number((DELIVERY_FORMULA_SPEC.baseFee + billableDistance * DELIVERY_FORMULA_SPEC.ratePerKm).toFixed(2)) : 0;
  const totalAmount = (cartSubtotal + deliveryFee).toFixed(2);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.priceRetail,
          qty: 1,
          unit: product.unit,
          farm: product.farmName,
          distanceKm: product.distanceKm,
        },
      ];
    });
    setOrderPlaced(false);
  };

  const handleUpdateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleFarmerSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: `p-${Date.now()}`,
      name: farmerForm.name,
      category: farmerForm.category,
      farmer: "Ramesh Patel",
      farmName: "Green Valley Organic Farm",
      distanceKm: 14.8,
      harvestTime: farmerForm.harvestTime,
      priceRetail: Number(farmerForm.priceRetail),
      priceBulk: Number(farmerForm.priceBulk),
      unit: "kg",
      bulkMinKg: 20,
      rating: 5.0,
      reviewsCount: 1,
      stockKg: Number(farmerForm.stockKg),
      isOrganic: true,
      isSurplus: farmerForm.isSurplus,
      badge: farmerForm.isSurplus ? `Surplus -${farmerForm.surplusDiscount}%` : "Fresh Harvest Batch",
      description: "Directly added from the Farmer Field Mode portal during the live simulation.",
      priceBreakdown: { farmerPercent: 74, deliveryPercent: 16, platformPercent: 10 }
    };

    setProducts([newProduct, ...products]);
    setFarmerSuccessMsg(true);
    setTimeout(() => setFarmerSuccessMsg(false), 4000);
  };

  return (
    <section id="section-11" className="case-study-section">
      <div id="section-prototype"></div>
      <div className="container-1440">
        
        {/* Section Header */}
        <div style={{ marginBottom: "var(--space-2xl)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "var(--space-xs)" }}>
            <span className="badge badge-terracotta">PAGE 11 / 14</span>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--color-muted-text)" }}>
              HIGH-FIDELITY INTERACTIVE PROTOTYPE SANDBOX
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", marginBottom: "var(--space-sm)" }}>
            Interactive Prototype Sandbox
          </h2>
          <p style={{ maxWidth: "860px", fontSize: "17px", color: "var(--color-muted-text)" }}>
            Test the live interaction loops firsthand. Switch between the Consumer Grocery Shopping experience and the Farmer Field Listing flow to witness real-time inventory updates and transparent distance pricing.
          </p>
        </div>

        {/* Sandbox Role Switcher */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "var(--space-md)", marginBottom: "var(--space-xl)" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setActiveRole("consumer")}
              className="btn"
              style={{
                background: activeRole === "consumer" ? "var(--color-forest-green)" : "var(--color-white)",
                color: activeRole === "consumer" ? "var(--color-white)" : "var(--color-main-text)",
                border: "1px solid",
                borderColor: activeRole === "consumer" ? "var(--color-forest-green)" : "var(--color-border-subtle)",
                padding: "10px 18px",
                borderRadius: "var(--radius-md)",
                fontSize: "13px",
                fontWeight: activeRole === "consumer" ? 700 : 500,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <ShoppingBag size={16} />
              <span>Consumer Marketplace View</span>
            </button>

            <button
              onClick={() => setActiveRole("farmer")}
              className="btn"
              style={{
                background: activeRole === "farmer" ? "var(--color-forest-green)" : "var(--color-white)",
                color: activeRole === "farmer" ? "var(--color-white)" : "var(--color-main-text)",
                border: "1px solid",
                borderColor: activeRole === "farmer" ? "var(--color-forest-green)" : "var(--color-border-subtle)",
                padding: "10px 18px",
                borderRadius: "var(--radius-md)",
                fontSize: "13px",
                fontWeight: activeRole === "farmer" ? 700 : 500,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Tractor size={16} />
              <span>Farmer Field Listing View</span>
            </button>
          </div>

          <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
            ⚡ Shared live React state engine active
          </div>
        </div>

        {/* Sandbox Content Container */}
        {activeRole === "consumer" ? (
          /* ============================================================== */
          /* CONSUMER MARKETPLACE SANDBOX                                    */
          /* ============================================================== */
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: "var(--space-xl)", alignItems: "start" }}>
            
            {/* Left: Product Catalog & Filters */}
            <div>
              {/* Filter Pills */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "var(--space-lg)" }}>
                {[
                  { id: "all", label: "All Harvests" },
                  { id: "today", label: "Picked Today (Dawn Feed)" },
                  { id: "surplus", label: "Surplus Flash Deals (-30%)" },
                  { id: "organic", label: "100% Certified Organic" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "12px",
                      fontWeight: activeFilter === f.id ? 700 : 500,
                      background: activeFilter === f.id ? "var(--color-forest-green)" : "var(--color-white)",
                      color: activeFilter === f.id ? "var(--color-white)" : "var(--color-main-text)",
                      border: "1px solid",
                      borderColor: activeFilter === f.id ? "var(--color-forest-green)" : "var(--color-border-subtle)",
                      cursor: "pointer",
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Product Cards Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "var(--space-md)" }}>
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    className="surface-card"
                    style={{
                      padding: "16px",
                      borderRadius: "var(--radius-lg)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                        <span className={`badge ${p.isSurplus ? "badge-terracotta" : "badge-leaf"}`} style={{ fontSize: "10px" }}>
                          {p.badge}
                        </span>
                        <span style={{ fontSize: "11px", color: "var(--color-muted-text)", display: "flex", alignItems: "center", gap: "2px" }}>
                          <MapPin size={11} /> {p.distanceKm} km
                        </span>
                      </div>

                      <h4 style={{ fontSize: "16px", color: "var(--color-forest-green)", marginBottom: "2px" }}>
                        {p.name}
                      </h4>
                      <div style={{ fontSize: "11px", color: "var(--color-muted-text)", marginBottom: "8px" }}>
                        {p.farmName} • {p.harvestTime}
                      </div>

                      <p style={{ fontSize: "12px", color: "var(--color-main-text)", lineHeight: 1.4, margin: "0 0 12px 0" }}>
                        {p.description}
                      </p>
                    </div>

                    <div>
                      {/* Price & Deconstruct Button */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--color-warm-cream)", padding: "8px 10px", borderRadius: "6px", marginBottom: "10px", border: "1px solid var(--color-border-subtle)" }}>
                        <div>
                          <div style={{ fontSize: "10px", color: "var(--color-muted-text)" }}>Retail Unit</div>
                          <strong style={{ fontSize: "15px", color: "var(--color-forest-green)" }}>
                            ${p.priceRetail.toFixed(2)} <span style={{ fontSize: "11px", fontWeight: 400 }}>/ {p.unit}</span>
                          </strong>
                        </div>
                        <button
                          onClick={() => setSelectedProductBreakdown(p)}
                          style={{ fontSize: "11px", color: "var(--color-terracotta)", fontWeight: 600, textDecoration: "underline", background: "none", border: "none", cursor: "pointer" }}
                        >
                          Deconstruct $
                        </button>
                      </div>

                      <button
                        onClick={() => handleAddToCart(p)}
                        className="btn btn-primary btn-sm"
                        style={{ width: "100%", fontSize: "12px", gap: "6px" }}
                      >
                        <Plus size={14} /> Add 1 {p.unit} to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live Cart & Transparent Distance Checkout */}
            <div className="surface-white" style={{ padding: "var(--space-lg)", borderRadius: "var(--radius-lg)", position: "sticky", top: "80px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--color-border-subtle)", paddingBottom: "10px", marginBottom: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <ShoppingBag size={18} color="var(--color-forest-green)" />
                  <h3 style={{ fontSize: "17px", color: "var(--color-forest-green)", margin: 0 }}>
                    Fresh Basket ({cart.reduce((a, b) => a + b.qty, 0)})
                  </h3>
                </div>
                {cart.length > 0 && (
                  <button onClick={() => setCart([])} style={{ fontSize: "11px", color: "var(--color-danger)", background: "none", border: "none", cursor: "pointer" }}>
                    Clear
                  </button>
                )}
              </div>

              {cart.length === 0 ? (
                <div style={{ textAlign: "center", padding: "var(--space-xl) 0", color: "var(--color-muted-text)", fontSize: "13px" }}>
                  🛒 Your basket is empty.<br />Click "+ Add" on any harvest card.
                </div>
              ) : (
                <div>
                  {/* Cart Items List */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "14px", maxHeight: "240px", overflowY: "auto" }}>
                    {cart.map((item) => (
                      <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--color-warm-cream)", padding: "8px 10px", borderRadius: "6px" }}>
                        <div>
                          <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)" }}>
                            {item.name}
                          </div>
                          <div style={{ fontSize: "11px", color: "var(--color-muted-text)" }}>
                            ${item.price.toFixed(2)} / {item.unit} • {item.distanceKm} km
                          </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <button
                            onClick={() => handleUpdateQty(item.id, -1)}
                            style={{ width: "22px", height: "22px", borderRadius: "4px", background: "var(--color-white)", border: "1px solid var(--color-border-subtle)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                          >
                            <Minus size={11} />
                          </button>
                          <span style={{ fontSize: "12px", fontWeight: 700, minWidth: "18px", textAlign: "center" }}>
                            {item.qty}
                          </span>
                          <button
                            onClick={() => handleUpdateQty(item.id, 1)}
                            style={{ width: "22px", height: "22px", borderRadius: "4px", background: "var(--color-white)", border: "1px solid var(--color-border-subtle)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                          >
                            <Plus size={11} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Distance Fee Calculation Box */}
                  <div style={{ background: "var(--color-soft-sage)", padding: "10px", borderRadius: "6px", fontSize: "12px", marginBottom: "14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-forest-green)", fontWeight: 600, marginBottom: "4px" }}>
                      <span>Road Distance Fee:</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div style={{ fontSize: "10px", color: "var(--color-muted-text)" }}>
                      Base $2.50 (first 3km) + {billableDistance.toFixed(1)}km × $0.40/km
                    </div>
                  </div>

                  {/* Summary Totals */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "13px", borderTop: "1px solid var(--color-border-subtle)", paddingTop: "10px", marginBottom: "16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-muted-text)" }}>
                      <span>Produce Subtotal:</span>
                      <span>${cartSubtotal.toFixed(2)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "var(--color-muted-text)" }}>
                      <span>Courier Transit Fee:</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", fontWeight: 800, color: "var(--color-forest-green)", borderTop: "1px dashed var(--color-border-subtle)", paddingTop: "6px" }}>
                      <span>Total Due:</span>
                      <span>${totalAmount}</span>
                    </div>
                  </div>

                  {/* Simulated Checkout Button */}
                  {orderPlaced ? (
                    <div style={{ background: "var(--color-success-bg)", border: "1px solid rgba(46, 125, 50, 0.3)", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
                      <CheckCircle size={24} color="#2E7D32" style={{ margin: "0 auto 4px auto" }} />
                      <strong style={{ fontSize: "13px", color: "#2E7D32" }}>Order #FH-9021 Confirmed!</strong>
                      <div style={{ fontSize: "11px", color: "#2E7D32", marginTop: "2px" }}>
                        Courier dispatched to Green Valley Farm. ETA: 38 mins.
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setOrderPlaced(true)}
                      className="btn btn-primary"
                      style={{ width: "100%", fontSize: "14px" }}
                    >
                      Place Distance-Verified Order (${totalAmount})
                    </button>
                  )}
                </div>
              )}
            </div>

          </div>
        ) : (
          /* ============================================================== */
          /* FARMER FIELD LISTING SANDBOX                                    */
          /* ============================================================== */
          <div className="surface-card" style={{ padding: "var(--space-2xl)", borderRadius: "var(--radius-xl)", maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "var(--space-md)", borderBottom: "1px solid var(--color-border-subtle)", paddingBottom: "12px" }}>
              <Tractor size={24} color="var(--color-forest-green)" />
              <div>
                <h3 style={{ fontSize: "20px", color: "var(--color-forest-green)", margin: 0 }}>
                  Farmer Ramesh Patel — 3-Step Field Listing Mode
                </h3>
                <div style={{ fontSize: "12px", color: "var(--color-muted-text)" }}>
                  Add a freshly picked harvest batch directly into the marketplace.
                </div>
              </div>
            </div>

            {farmerSuccessMsg && (
              <div style={{ background: "var(--color-success-bg)", border: "1px solid rgba(46, 125, 50, 0.3)", padding: "12px", borderRadius: "8px", color: "#2E7D32", fontSize: "13px", fontWeight: 600, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <CheckCircle size={18} />
                <span>Harvest batch successfully broadcasted! Switch to "Consumer Marketplace View" above to see your live listing.</span>
              </div>
            )}

            <form onSubmit={handleFarmerSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "4px" }}>
                  1. Crop Name & Variety
                </label>
                <input
                  type="text"
                  value={farmerForm.name}
                  onChange={(e) => setFarmerForm({ ...farmerForm, name: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--color-border-subtle)", fontSize: "14px" }}
                  required
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "4px" }}>
                    2. Harvest Timestamp (Auto-logged)
                  </label>
                  <input
                    type="text"
                    value={farmerForm.harvestTime}
                    onChange={(e) => setFarmerForm({ ...farmerForm, harvestTime: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--color-border-subtle)", fontSize: "14px", background: "var(--color-warm-cream)" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "4px" }}>
                    Available Harvest Yield (kg)
                  </label>
                  <input
                    type="number"
                    value={farmerForm.stockKg}
                    onChange={(e) => setFarmerForm({ ...farmerForm, stockKg: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--color-border-subtle)", fontSize: "14px" }}
                    required
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "4px" }}>
                    3a. Household Retail Price ($/kg)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={farmerForm.priceRetail}
                    onChange={(e) => setFarmerForm({ ...farmerForm, priceRetail: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--color-border-subtle)", fontSize: "14px" }}
                    required
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "var(--color-forest-green)", marginBottom: "4px" }}>
                    3b. Commercial Wholesale Tier ($/kg for 20kg+)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={farmerForm.priceBulk}
                    onChange={(e) => setFarmerForm({ ...farmerForm, priceBulk: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid var(--color-border-subtle)", fontSize: "14px" }}
                    required
                  />
                </div>
              </div>

              {/* Surplus Flash Toggle */}
              <div style={{ background: "var(--color-warm-cream)", padding: "14px", borderRadius: "8px", border: "1px solid var(--color-border-subtle)" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", fontSize: "13px", fontWeight: 600, color: "var(--color-forest-green)" }}>
                  <input
                    type="checkbox"
                    checked={farmerForm.isSurplus}
                    onChange={(e) => setFarmerForm({ ...farmerForm, isSurplus: e.target.checked })}
                    style={{ width: "18px", height: "18px", accentColor: "var(--color-terracotta)" }}
                  />
                  <span>Trigger Surplus Produce Flash Sale (-25% to liquidate fast)</span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", gap: "8px" }}>
                <Send size={16} /> Broadcast Harvest Batch to Marketplace
              </button>
            </form>
          </div>
        )}

        {/* Modal: Item Specific Deconstructed Price */}
        {selectedProductBreakdown && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 300,
              padding: "var(--space-md)",
            }}
            onClick={() => setSelectedProductBreakdown(null)}
          >
            <div
              className="surface-white"
              style={{
                maxWidth: "460px",
                width: "100%",
                padding: "var(--space-xl)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-xl)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-md)" }}>
                <div>
                  <span className="badge badge-forest" style={{ marginBottom: "4px" }}>
                    PRODUCE COST STRUCTURE
                  </span>
                  <h3 style={{ fontSize: "18px", color: "var(--color-forest-green)", margin: 0 }}>
                    {selectedProductBreakdown.name}
                  </h3>
                </div>
                <button onClick={() => setSelectedProductBreakdown(null)} style={{ fontSize: "20px", color: "var(--color-muted-text)", background: "none", border: "none", cursor: "pointer" }}>
                  ×
                </button>
              </div>

              <div style={{ fontSize: "13px", color: "var(--color-muted-text)", marginBottom: "var(--space-md)" }}>
                Retail price of ${selectedProductBreakdown.priceRetail.toFixed(2)} / {selectedProductBreakdown.unit} deconstructed:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "var(--space-lg)" }}>
                <div style={{ background: "var(--color-soft-sage)", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span>Farmer Share ({selectedProductBreakdown.priceBreakdown.farmerPercent}%)</span>
                  <strong>${((selectedProductBreakdown.priceRetail * selectedProductBreakdown.priceBreakdown.farmerPercent) / 100).toFixed(2)}</strong>
                </div>
                <div style={{ background: "var(--color-warm-ivory)", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span>Courier Share ({selectedProductBreakdown.priceBreakdown.deliveryPercent}%)</span>
                  <strong>${((selectedProductBreakdown.priceRetail * selectedProductBreakdown.priceBreakdown.deliveryPercent) / 100).toFixed(2)}</strong>
                </div>
                <div style={{ background: "var(--color-warm-cream)", padding: "10px", borderRadius: "8px", display: "flex", justifyContent: "space-between" }}>
                  <span>Platform Operations ({selectedProductBreakdown.priceBreakdown.platformPercent}%)</span>
                  <strong>${((selectedProductBreakdown.priceRetail * selectedProductBreakdown.priceBreakdown.platformPercent) / 100).toFixed(2)}</strong>
                </div>
              </div>

              <button onClick={() => setSelectedProductBreakdown(null)} className="btn btn-primary" style={{ width: "100%" }}>
                Understood & Close
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
