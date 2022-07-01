//% weight=100 color=#16A085 icon=T

namespace temp {
    /**
     *  start the temp
     */
    //% block
    //% group="temp"
    export function startTemp(): void {

        let temp = input.temperature()

        
            
         basic.showNumber(temp)
        
    }
    /**
     *  value temp is useful
     */
    //% block
    //% group="value"
    export function tempValue(): number {
        return input.temperature()
    }
}
