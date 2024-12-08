use anchor_lang::prelude::*;

declare_id!("6tWJGJH2dwRgWTBNCR1pBMakfXhqew8Wv6kVwy1iT5FY");

#[program]
pub mod contracts {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
