import Container from "@/components/Container"
import Button from "@/components/designSystem/Button"
import Price from "@/components/Price"

function CartPaymentsBoxNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/60 backdrop-blur-sm border-t border-black/10 lg:py-4 pt-2.5 pb-2">
      <Container>
        <div className="w-full! flex justify-between items-center">
          <div className="w-1/2">
            <Button btnType="primary" size="lg" className="w-full!">
            تایید و تکمیل سفارش
            </Button>
          </div>
          <div className="flex flex-col">
            <div className="text-sm text-center text-black/50">
                جمع سبد خرید
            </div>
            <Price price={250000} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CartPaymentsBoxNav