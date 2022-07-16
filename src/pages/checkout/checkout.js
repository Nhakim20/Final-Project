import React from "react";

const Checkout = () => {
  return (
    <>
        <div className="container">
          <div class="row g-5">
            <div class="col-md-5 col-lg-4 order-md-last">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span classname="badge bg-primary rounded-pill">3</span>
              </h4>
              <ul classname="list-group mb-3">
                <li classname="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 classname="my-0">Product name</h6>
                    <small classname="text-muted">Brief description</small>
                  </div>
                  <span classname="text-muted">$12</span>
                </li>
                <li classname="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 classname="my-0">Second product</h6>
                    <small classname="text-muted">Brief description</small>
                  </div>
                  <span classname="text-muted">$8</span>
                </li>
                <li classname="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 classname="my-0">Third item</h6>
                    <small classname="text-muted">Brief description</small>
                  </div>
                  <span classname="text-muted">$5</span>
                </li>
                <li classname="list-group-item d-flex justify-content-between bg-light">
                  <div classname="text-success">
                    <h6 classname="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span classname="text-success">−$5</span>
                </li>
                <li classname="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>

              <form classname="card p-2">
                <div classname="input-group">
                  <input
                    type="text"
                    classname="form-control"
                    placeholder="Promo code"
                  />
                  <button type="submit" classname="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </form>
            </div>
            <div classname="col-md-7 col-lg-8">
              <h4 classname="mb-3">Billing address</h4>
              <form classname="needs-validation" novalidate="">
                <div classname="row g-3">
                  <div classname="col-sm-6">
                    <label for="firstName" classname="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      classname="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required=""
                    />
                    <div classname="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div classname="col-sm-6">
                    <label for="lastName" classname="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      classname="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required=""
                    />
                    <div classname="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div classname="col-12">
                    <label for="email" classname="form-label">
                      Email <span classname="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      classname="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div classname="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div classname="col-md-3">
                    <label for="zip" classname="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      classname="form-control"
                      id="zip"
                      placeholder=""
                      required=""
                    />
                    <div classname="invalid-feedback">Zip code required.</div>
                  </div>
                </div>

                <hr classname="my-4" />

                <hr classname="my-4" />

                <h4 classname="mb-3">Payment</h4>

                <div classname="my-3">
                  <div classname="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      classname="form-check-input"
                      checked=""
                      required=""
                    />
                    <label classname="form-check-label" for="credit">
                      Credit card
                    </label>
                  </div>
                  <div classname="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      classname="form-check-input"
                      required=""
                    />
                    <label classname="form-check-label" for="debit">
                      Debit card
                    </label>
                  </div>
                  <div classname="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      classname="form-check-input"
                      required=""
                    />
                    <label classname="form-check-label" for="paypal">
                      PayPal
                    </label>
                  </div>
                </div>

                <div classname="row gy-3">
                  <div classname="col-md-6">
                    <label for="cc-name" classname="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      classname="form-control"
                      id="cc-name"
                      placeholder=""
                      required=""
                    />
                    <small classname="text-muted">
                      Full name as displayed on card
                    </small>
                    <div classname="invalid-feedback">Name on card is required</div>
                  </div>

                  <div classname="col-md-6">
                    <label for="cc-number" classname="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      classname="form-control"
                      id="cc-number"
                      placeholder=""
                      required=""
                    />
                    <div classname="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>

                <hr classname="my-4" />

                <button class="w-100 btn btn-primary btn-lg" type="submit">
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </div>
    </>
  );
};

export default Checkout;
