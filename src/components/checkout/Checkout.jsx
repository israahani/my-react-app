// src/components/checkout/Checkout.jsx
import React from 'react';
import './Checkout.css'; // Make sure this file exists and is correctly named

export const Checkout = () => {
  return (
    <div className="checkout">
      <div className="div-2">
     
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper-14">Checkout</div>
              </div>
            </div>
            <div className="group-14">
           
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="frame-2">
            <div className="div-wrapper">
              <div className="overlap-3">
                <div className="group-15">
                  <div className="overlap-4">
                    <div className="rectangle" />
                    <div className="text-wrapper-17">Billing details</div>
                    <div className="group-16">
                      <div className="first-name">First Name</div>
                      <input type="text" className="rectangle-2" />
                    </div>
                    <div className="text-wrapper-19">Last Name</div>
                    <input type="text" className="rectangle-3" />
                    <div className="text-wrapper-20">Company Name (Optional)</div>
                    <input type="text" className="rectangle-4" placeholder="Luminova Tech" />
                    <div className="group-17">
                      <div className="text-wrapper-18">Street address</div>
                      <input type="text" className="div-3" />
                    </div>
                    <div className="group-18">
                      <div className="text-wrapper-18">ZIP code</div>
                      <input type="text" className="div-3" />
                    </div>
                    <div className="group-19">
                      <div className="text-wrapper-18">Town / City</div>
                      <select className="div-3" style={{ fontSize: 'larger' }}>
                        <option value="جنين">جنين</option>
                        <option value="طوباس">طوباس</option>
                        <option value="نابلس">نابلس</option>
                        <option value="قلقيلية">قلقيلية</option>
                        <option value="طولكرم">طولكرم</option>
                        <option value="طولكرم">غزة</option>
                        <option value="طولكرم">دير البلح</option>
                        <option value="طولكرم">خانيونس</option>
                        <option value="طولكرم">رفح</option>
                        <option value="طولكرم">شمال غزة</option>
                        <option value="رام الله والبيرة">رام الله والبيرة</option>
                        <option value="الخليل">الخليل</option>
                        <option value="بيت لحم">بيت لحم</option>
                        <option value="أريحا">أريحا والأغوار</option>
                        <option value="القدس">سلفيت</option>
                        <option value="القدس">القدس</option>

                        <option value="عمان">عمان</option>
                        <option value="البلقاء">البلقاء</option>
                        <option value="الزرقاء">الزرقاء</option>
                        <option value="مادبا">مادبا</option>
                        <option value="اربد">اربد</option>
                        <option value="العقبة">العقبة</option>
                        <option value="الطفيلة">الطفيلة</option>
                        <option value="الكرك">الكرك</option>
                        <option value="المفرق">المفرق</option>
                        <option value="معان">معان</option>
                        <option value="جرش">جرش</option>
                        <option value="عجلون">عجلون</option>
                      </select>
                    </div>
                    <div className="group-20">
                      <div className="text-wrapper-18">Phone</div>
                      <input type="text" className="div-3" />
                    </div>
                    <div className="group-21">
                      <div>
                        <div className="text-wrapper-18">Email Address</div>
                        <input type="text" className="div-3" placeholder="example@gmail.com" />
                      </div>
                    </div>
                    <div className="group-22">
                      <input type="text" className="overlap-group-3" placeholder="Additional information" />
                    </div>
                    <div className="group-23">
                      <div className="overlap-5">
                        <div className="group-24">
                          <div className="text-wrapper-18">Country / Region</div>
                          <select className="rectangle-5" style={{ fontSize: 'larger' }}>
                            <option value="Country1">فلسطين</option>
                            <option value="Country2">الأردن</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="group-25">
                      <div className="overlap-6">
                        <div className="group-26">
                          <div>
                            <div className="text-wrapper-18">Province</div>
                            <input className="div-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="your-personal-data">
                      <span className="span">
                        Your personal data will be used to support your experience throughout this website, to manage
                        access to your account, and for other purposes described in our
                      </span>
                      <span className="text-wrapper-24"> privacy policy.</span>
                    </p>
                  </div>
                </div>
                <div className="group-27">
                  <div className="group-28">
                    <div className="group-29">
                      <div className="overlap-group-4">
                        <button className="custom-button">Place order</button>
                      </div>
                    </div>
                    <img className="line-3" alt="Line" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFj5d16MLeTtoeYdtxDYUDzaQVU-XJnrUFPg&usqp=CAU" />
                    <div className="group-30">
                      <div className="text-wrapper-26">Direct Bank Transfer</div>
                      <p className="text-wrapper-27">
                        Make your payment directly into our bank account. Please use your Order ID as the payment
                        reference. Your order will not be shipped until the funds have cleared in our account.
                      </p>
                      <div className="ellipse" />
                    </div>
                    <div className="group-31">
                      <div className="text-wrapper-28">Direct Bank Transfer</div>
                      <div className="ellipse-2" />
                    </div>
                    <div className="group-32">
                      <div className="text-wrapper-29">Cash On Delivery</div>
                      <div className="ellipse-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-33" />
            <div className="group-34">
              <div className="overlap-7">
                <div className="rectangle-6" />
                <img className="mask-group" alt="Mask group" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxUUExYTFBQXFhYYGR0cFxkZGCAhHBwfGSAZGR0gHyMhHyojGR0pHyEcJDQkKC0uMTExHSE2OzYxOioxMS4BCwsLDw4NHBARGjonIic6OjIwOjgzMDMxOjQzOjM5NDo6Oi4zOjY4Ojo6O
                DsyLjo6NjE6ODgwMjAzMTo6MC46MP/AABEIAMcA/QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABQMEBgcCAQj/xABMEAACAQMCAwUEBQkDCwMFAQABAgMABBESIQUxQQYTIlFhMnGBkQcUQqGxIzNSU2JygpKiFUPBFiQ0Y3OTssLR0vBkg6NEVLPh8Qj/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgYF/8QAJhEBAAICAQMDB
                AMAAAAAAAAAAAECAxEEEiExBUFhInGRoRMyNP/aAAwDAQACEQMRAD8A7NRRRQFFFFAUUUUBRRRQFFFFAUUmv+1NtE5jMuuVecUSmRxnlqVASv8AFiqjcduJPzVukQz7dxKoPvCR6yfcWWg0lU+I8ThgXXNLHEvm7hR953NIJYnf/SOIbdUgKwp/NlpR8HFV4bzhduxcTWqvyMjSo0hx5uzF2+JoGrdpw20FvPPvjUE7tPfqlKBl9U1VEXvpebw
                Wy75EYMsnph30Ip96NVZu2tlsRcK+eXdqz/8ACpryO2UBJCR3LkeVtKAfcWQCgtrwiX7d9dP8YV/4IVrzJ2eRjlprsn0u5l+5JFH3VSbtXISNFhcsD1YwoPvlz91eJOPXp9iziX/aXP8A2RtQMl7N2/VZG/fnmf565Dn41G3ZGyJybS3J8zEpPzIzS573iLcjaRfwySEf1IDXkxXre1ehfPurdB8tZf8AxoG/+TVt9mIp+5I6D+lhUZ7MQ9JLpR
                6XtwB8u9xSkcIkP5y9un90ip/+NFr5/kxbH84jzf7aWSXn6OxFBbvZ7aDZ+JyRejXSk/8AyBiaWt2gXOIeJX83kI7WOQe7V9Vx/VTK04ZDEMRQxRj9hFH4CrWaBIePcRO0KTt5GeKBAf5ZM/0g097DcXuZ1mS7EQlikC/ks6dLIrDOScnc7jblXyo+xzYu75f9g/8AMjJ/yUGsooooCiiigKKKKAooooCiiigKKKKAooooCiiig5jwjgVtMbh5YI5
                GN3dbuoJIE0gHOr/+Sdl/9pb/AO5T/pVfiVne2EM8oS3miE0kp/KOrgTSluXdkHTryd+QOMmqFv2suCMmCD+G4BH4Cgdw9nbVPZtoF90Sf9KuRWca+zGi+5QPwFZh+1F1na3t8etwR+CGvLdpbsjaG1U/tTuR9yCg1w25bV6rF/5R3n23sk9zOf8AiIqpP2iuMZa/to1zzSIH5lnI+6g39fMVzSfj6sSG4pO3XEKqPvWMn76qT8Stn9prybPnJKB8Rr
                XHyoOpSzovtMq455YD8aX3Xai0j9u5hH/uKfwO9c1N7bcxw/UeWZCh2+JbNSf25Iu0VvBEOhxk+mwAH30G8ftpa/ZaSTPLu4ZG/BdvjUcna7b8na3D+8Knz1MPuzWDk4rctzn0+kaKv45P31UkQt7byP8AvuxHlyJxQbW+7bTL/dW0XL89c779MIp/Go4+McQmOI8kf6mzkYY8tchCZqj9F1kp4lAFUDQkj7DbAXR+LjHxrt9Bymw7NcTlePvjcCPWve
                d5PHHlMjVgQEkNpzjcHPzroPBOz1va6zChUvp1szu7No1acl2JONTfOmtFAUUUUBRRRQFFFFAUUUUBRRRQFFFRSyBQWYhVAySTgADqT0FBLRXMO2n0iK88djZXkMAYZmuyQyRjfwJ0LnHP1G43Ims+xTOnfWXG7l5QMh2nEsbH9pRzB9c49aDpNFY3sb2vkkmexv4xDexjIx7Eyfpx/wCI/wChC7KgjljDAqwBB2IIyCPUdaxfEbvgasweKzdwcMI7dZX
                BHMERoxBB+VI+3XbHvpHt0kcQBjGEh/O3DLs4BBysQbwkjGdLZJBxSfhXGAwSKKHJGziMjuohyxrwAzAdFzvQO+JcW4asT9zw2QDSfGI0hVdufjdW/prnEdqrKveKrMANWfFvjf41qe1FhPLjQUMS7lC2kkjfJOMEDoDjqd+mefh0hCuIpASAQyrqBHTdchhj8aCFbGMf3afyipEgUclUe4Co0aXODE4HVjFIFH9J/Hy99SMzABjHJpO4ZVLKRtuCuQf/A
                O0Huiq/15fJ/wDdv/20fXl8n/3b/wDbQWKKgW6B5LJ/un/7a8XfEEjGWyPh/wBaC1RVW1lnm/MW0jD9JvCvzO1WJOD3IGZp7eAerZI/w++g2v0Mw6r2d/1cAH+8fI/4D8665X5n/IRhVbieNJO8EOG383Uam95JpjDxOCTZuL3rDkA80g/EUH6Hor89rwuBzleJPIOqvPn7w4I++mlrwOLn/nBHRoL85P8AC0eB/PQdworjSGODGjjF/ZseS3YEqZ54ypKD5
                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" />
              </div>
            </div>
            <div className="text-wrapper-30">Cart Totals</div>
            <div className="group-35">
              <div className="text-wrapper-31">Subtotal</div>
              <div className="text-wrapper-32">Total</div>
              <div className="text-wrapper-33">$. 250,000.00</div>
              <div className="text-wrapper-34">$. 250,000.00</div>
              <div className="text-wrapper-35">$. 250,000.00</div>
              <div className="group-36">
                <div className="overlap-group-5">
                  <div className="rectangle-7" />
                  <button className="custom-button1">Check Out</button>
                </div>
              </div>
            </div>
            <div className="text-wrapper-37">Product</div>
            <div className="text-wrapper-38">Price</div>
            <div className="text-wrapper-39">Quantity</div>
            <div className="rectangle-8" />
            <div className="text-wrapper-40">1</div>
          </div>
          <div className="feature-wrapper">
            <div className="feature">
              <div className="frame-3">
                <img className="img-2" alt="Trophy" src="/img/trophy-1.svg" />
                <div className="text">
                  <div className="text-wrapper-41">High Quality</div>
                  <div className="text-wrapper-42">crafted from top materials</div>
                </div>
              </div>
              <div className="frame-4">
                <img className="img-2" alt="Guarantee" src="/img/guarantee.svg" />
                <div className="text">
                  <div className="text-wrapper-41">Warranty Protection</div>
                  <div className="text-wrapper-42">Over 2 years</div>
                </div>
              </div>
              <div className="frame-4">
                <img className="img-2" alt="Shipping" src="/img/shipping.svg" />
                <div className="text">
                  <div className="text-wrapper-41">Free Shipping</div>
                  <div className="text-wrapper-42">Order over 150 $</div>
                </div>
              </div>
              <div className="frame-3">
                <img className="img-2" alt="Customer support" src="/img/customer-support.svg" />
                <div className="text">
                  <div className="text-wrapper-41">24 / 7 Support</div>
                  <div className="text-wrapper-42">Dedicated support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
