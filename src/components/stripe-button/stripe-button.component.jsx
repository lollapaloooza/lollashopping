import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = "pk_test_51Jp9jPB3cEK26jpkNtR2CIvDMuBLKFcMMfnSKOm0TVpXFHkFybrXPaOuh9sxx2fvQi4tChCe4BMbjAi1iD7ghYHF00eIPXdG48";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='XMA Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}/>
    )
}

export default StripeCheckoutButton;