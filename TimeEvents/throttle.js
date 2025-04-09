function throttle(func, wait, option = {leading: true, trailing: true}) {
    let waiting = false;
    let lastArgs = null;
    return function wrapper(...args) {
      if(!waiting) {
        waiting = true;
        const startWaitingPeriod = () => setTimeout(() => {
          if(option.trailing && lastArgs) {
            func.apply(this, lastArgs);
            lastArgs = null;
            startWaitingPeriod();
          }
          else {
            waiting = false;
          }
        }, wait);
        if(option.leading) {
          func.apply(this, args);
        } else {
          lastArgs = args; // if not leading, treat like another any other function call during the waiting period
        }
        startWaitingPeriod();
      }
      else {
        lastArgs = args; 
      }
    }
}

//throttle without leding and trailing

function throttleWithoutLeadingTrailing(func, wait){
    let waiting = false
    let lastArgs;

    return function(...args){
        if(!waiting){
            func.apply(this, args);
            waiting = true;

            let timeout = () => setTimeout(() => {
                waiting = false;

                if(lastArgs){
                    func.apply(this, lastArgs);
                    waiting = true;
                    lastArgs = null;
                    timeout();
                }
            }, wait);

            timeout();
        } else {
            lastArgs = args;  
        }
    }
}   