function Generate_True_Or_False() {
    var Number = Math.random()
    return Number < 0.5 // 49.99% true en 50.01% false (ongeveer)
}


class Enemy {
    constructor(Type, Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7) {
        // global values for enemies
        if (Arg7 == null) {
            Arg7 = 60
        }

        this.Type = Type;
        this.Hitbox = false;
        this.Life_Time = Arg7;
        this.Current_Life_Time = 0;
        this.Color = color("rgba(255, 0, 0, 0.25)");

        if (Type == "Beam") {
            if (Arg5 == null) {
                Arg5 = 30
            }
            this.Offset = Arg1;
            this.Vertical = Arg2;
            this.Width = Arg3 * 0.8; // 80%; make warning smaller then actual beam
            this.MaxWidth = Arg3;
            this.Warn_Time = Arg5;
            this.Current_Warn_Frame = 0;
            this.Alter_Beam = Arg4;

            if (this.Vertical == null) {
                this.Vertical = Generate_True_Or_False(); // if argument is null, generate automaticly
            }
            if (this.Alter_Beam == null) {
                this.Alter_Beam = Generate_True_Or_False(); // if argument is null, generate automaticly
            }
            return;
        }

        if (Type == "Rectangle") {
            this.x = Arg1;
            this.y = Arg2;
            this.Width = Arg3 * 0.8; // 80%
            this.MaxWidth = Arg3;
            this.Warn_Time = 30;
            this.Current_Warn_Frame = 0;
            return;
        }

        if (Type == "Moving_Rectangle") {
            this.StartX = Arg1;
            this.StartY = Arg2;
            this.EndX = Arg3;
            this.EndY = Arg4;
            this.Width = Arg5 * 0.8; // 80%
            this.MaxWidth = Arg5;
            this.Life_Time = (dist(Arg1,Arg2,Arg3,Arg4)/2) / Arg6;
            this.Warn_Time = 30;
            this.Current_Warn_Frame = 0;
            return;
        }

        if (Type == "World_Beam") {
            if (Arg5 == null) {
                Arg5 = Generate_True_Or_False();
            }
            this.Vertical = Arg1;
            this.Amount = Arg2;
            this.Width = Arg3;
            this.Delay = Arg4;
            this.Alter = Arg5;
            this.Current_Delay = 0;
            this.Beam_Amount = 0;
            this.Beams = []

            if (this.Vertical == null) {
                this.Vertical = Generate_True_Or_False();
            }
            if (this.Vertical == true) {
                this.Spaceing = windowHeight/this.Amount
            } else {
                this.Spaceing = windowWidth/this.Amount
            }

            // this exsist, so when creating a new world beam, it will return a lot of new beams, which the worldbeam exsists of.
            // and i use 2 different for loops since the beams can coome from horizontal and vertical
            if (this.Alter == true) {
                for (let Beam_Amount = 0; Beam_Amount < this.Amount; Beam_Amount++) { 
                    let Spacing = this.Spaceing * Beam_Amount
                    this.Beams.push( new Enemy("Beam", Spacing ,this.Vertical, this.Width, this.Alter, 10, null, 10))
                }
            } else {
                for (let Beam_Amount = 0; Beam_Amount < this.Amount; Beam_Amount++) { 
                    let Spacing= this.Spaceing * Beam_Amount;
                    this.Beams.push( new Enemy("Beam", Spacing ,this.Vertical, this.Width, this.Alter, 10, null, 10))
                }
            }
          

            return;
        }

        console.warn("WARNING: Type: " + Type + " is not a valid type, please retry!")
    }

    Warn_Frame() {
        // enemies that have warnings have a Warning_Frame function
        if (this.Type == "Rectangle") {
            push();
            noStroke();
            // the 3th argument here matters for the speed of the lerp
            let TargetWidth = lerp(this.Width, this.MaxWidth, 1/this.Warn_Time);
            let DeltaX = (TargetWidth - this.Width) / 2;
            let DeltaY = (TargetWidth - this.Width) / 2;

            this.Width = TargetWidth;
            this.x = lerp(this.x - DeltaX, this.x + DeltaX, 1/60); // the last argument values don't matter a lot, i checked myself
            this.y = lerp(this.y - DeltaY, this.y + DeltaY, 1/60);


            fill(this.Color);
            rect(this.x, this.y, this.Width, this.Width);
            pop();
            return;
        }

        if (this.Type == "Beam") {
            push();
            noStroke();
            fill(this.Color);
            if (this.Vertical == true) {
                //beam is vertical

                if (this.Alter_Beam) {
                    rect(lerp(windowWidth, 0, this.Current_Warn_Frame/this.Warn_Time), this.Offset, windowWidth, this.Width);
                }else {
                    rect(0, this.Offset, lerp(0, windowWidth, this.Current_Warn_Frame/this.Warn_Time), this.Width);
                }
            } else {
                //beam is horizontal
                if (this.Alter_Beam) {
                    rect(this.Offset, lerp(windowHeight, 0, this.Current_Warn_Frame/this.Warn_Time), this.Width, windowHeight);
                } else {
                    rect(this.Offset, 0, this.Width, lerp(0, windowHeight, this.Current_Warn_Frame/this.Warn_Time));
                }

            }
            pop();
            return;
        }

        if (this.Type == "Moving_Rectangle") {

            this.Draw_Line_And_Points();

            push();
            noStroke();
            // the 3th argument here matters for the speed of the lerp
            let TargetWidth = lerp(this.Width, this.MaxWidth, 1/this.Warn_Time);
            let DeltaX = (TargetWidth - this.Width) / 2;
            let DeltaY = (TargetWidth - this.Width) / 2;

            this.Width = TargetWidth;
            this.StartX = lerp(this.StartX - DeltaX, this.StartX + DeltaX, 1/60);
            this.StartY = lerp(this.StartY - DeltaY, this.StartY + DeltaY, 1/60);

            fill(this.Color);
            rect(this.StartX, this.StartY, this.Width, this.Width);

            pop();
            return;
        }
    }

    HitBox_Frame() {
        //any function where the enemies have hitboxes enabled
        if (this.Type == "Rectangle") {
            //copied from earlier lol
            push();
            noStroke();
            let TargetWidth = lerp(this.Width, this.MaxWidth * 1.2, 0.25);
            let DeltaX = (TargetWidth - this.Width) / 2;
            let DeltaY = (TargetWidth - this.Width) / 2;

            this.Width = TargetWidth;
            this.x = lerp(this.x - DeltaX, this.x + DeltaX, 1/60);
            this.y = lerp(this.y - DeltaY, this.y + DeltaY, 1/60);

            this.Color.setAlpha(255);

            fill(this.Color);
            rect(this.x, this.y, this.Width, this.Width);
            pop();
            return;
        }

        if (this.Type == "Beam") {
            push();
            noStroke();
            this.Color.setAlpha(255);
            fill(this.Color);
            if (this.Vertical == true) {
                // Beam is vertical
                rect(0, this.Offset, windowWidth, this.MaxWidth);
            } else {
                // Beam is horizontal
                rect(this.Offset, 0, this.MaxWidth, windowHeight);
            }
            
            pop();
            return;
        }

        if (this.Type == "Moving_Rectangle") {

            this.Draw_Line_And_Points();

            noStroke();
            this.Color.setAlpha(255);

            fill(this.Color);

            let New_X = lerp(this.StartX, this.EndX, this.Current_Life_Time/this.Life_Time);
            let Nex_Y = lerp(this.StartY, this.EndY, this.Current_Life_Time/this.Life_Time);
            rect(New_X, Nex_Y, this.Width, this.Width);
        }

        if (this.Type == "World_Beam") {
            this.Current_Delay++;
            if (this.Current_Delay >= this.Delay && this.Beam_Amount < this.Amount) {
                if (this.Beams.length == 0) { // only remove the worldbeam once all beams are done
                    return true // since this doesn't have the variables: Current_Life_Time and Life_Time, make custom removal function
                }
                
                this.Current_Delay -= this.Delay
                this.Beam_Amount++;
            }

            let Remove_Array = []

            for (let Beam_Amount = 0; Beam_Amount < this.Beam_Amount; Beam_Amount++) {
                if (!this.Beams[Beam_Amount]) {
                    //break the loop since the index doesn't exsist and this is a bugfix
                    break;
                }

                let Remove = this.Beams[Beam_Amount].Handle_Frame();
                
                if (Remove) {
                    Remove_Array.push(Beam_Amount);
                }
            }

            for (let Index = Remove_Array.length - 1; Index >= 0; Index--) {
                this.Beams.splice(Remove_Array[Index], 1);
                this.Beam_Amount--;
            }
        }
    }

    // private function but used as a mothod because it needs to access "this".
    Draw_Line_And_Points() {
        let Center_X = lerp(this.StartX, this.EndX, this.Current_Life_Time/this.Life_Time) + this.Width/2;
        let Center_Y = lerp(this.StartY, this.EndY, this.Current_Life_Time/this.Life_Time) + this.Width/2;
      
        push();
        stroke("white");
        line(Center_X, Center_Y, this.EndX + this.Width/2, this.EndY + this.Width/2);
        point(this.EndX + this.Width/2, this.EndY + this.Width/2);
        pop();
    }

    Handle_Frame() {
        if (this.Type == "World_Beam") {
            let Frame = this.HitBox_Frame();
            return Frame
            // return this.HitBox_Frame(), because the worldbeam will return true once it needs to be removed, which is returned by this function
        }

        if (this.Current_Warn_Frame >= this.Warn_Time) {
            if (this.Current_Life_Time >= this.Life_Time) {
                return true // meaning the game should remove this object and not handle it anymore
            }
            this.Current_Life_Time++;
            this.Hitbox = true;
            this.HitBox_Frame();
        } else {
            this.Current_Warn_Frame++;
            this.Warn_Frame();
        }
    }
}