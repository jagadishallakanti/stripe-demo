const { request, response, json} = require('express');

const stripe = require('stripe')('sk_test_51MXHjmCOzacKm8j6I4xPyAvJbN0YLdQ23XOybWxJrWCsujulphXGKfhJ4qlRcAdkGpoC8oa9KyxnoEwXm2ejgdY000u9TvXEzB');
async function createPayee(request, response) {
  const {first_name, last_name, email_address} = request.body

  try {
    const account = await stripe.accounts.create({
      type: "custom",
      country: "US",
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
      business_type: "individual",
      external_account: {
        object: "bank_account",
        country: "US",
        currency: "usd",
        routing_number: "110000000",
        account_number: "000123456789",
      },
      tos_acceptance: { date: new Date(), ip: "8.8.8.8" },
      business_profile: { mcc: 5045, url: "https://bestcookieco.com" },
      individual: {
        first_name: first_name,
        last_name: last_name,
        phone: "+16505551234",
        email: email_address,
        id_number: "222222222",
        address: {
          line1: "address_full_match",
          city: "Schenectady",
          postal_code: "12345",
          state: "NY",
        },
        dob: {
          day: 01,
          month: 01,
          year: 1901,
        },
        verification: {
          document: {
            front: "file_identity_document_success"
          },
        },
      },
    });

    console.log(account);
    response.status(200).json({payee_id: account.id})
  } catch (err) {
    console.error(err);
    response.status(500).json(err)
  }
}
async function createCustomer(request, response) {
  const {name, email, payee} = request.body
  try {
    const customer = await stripe.customers.create({name: name, email: email}, {stripeAccount: payee});

    console.log("Customer created successfully: \n")
    console.log(customer)
    response.status(200).json({ customer_id: customer.id});
  } catch (error) {
    console.error(error);
    response.status(500).json(error);
  }
}
async function addCardToUser(customer, payee,  card){
  try {
    const cardToken = await stripe.tokens.create({card: card});
    const cardResponse = await stripe.customers.createSource(
        customer,
        {
          source: cardToken.id
        },
        {
          stripeAccount: payee
        });

  }catch (error){
    console.error(error);
  }
}
async function payNow(request, response) {
  const {amount, customer, payee,  card} = request.body

  try {
    await addCardToUser(customer, payee, card)
    const charge = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      customer: customer
    }, {
      stripeAccount: payee,
    });

    console.log("charged customer successfully: \n")
    console.log(charge)
    response.status(200).json({msg: "success"});
  }catch (error) {
    console.error(error)
    response.status(500).json({error : { message: error.message}});
  }
}

module.exports = {
  createPayee,
  createCustomer,
  payNow
};