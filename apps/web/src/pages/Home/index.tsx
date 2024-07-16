import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export const Home = () => {
  return (
    <div>
      <Carousel 
        className="w-full flex items-center max-w-lg justify-center mx-auto"
      >
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent className="flex items-center justify-center">
                <img src="https://zecoxinha.com.br/wp-content/uploads/2022/08/banner-3.png"/>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}