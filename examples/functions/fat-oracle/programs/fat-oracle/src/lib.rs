use anchor_lang::prelude::*;
use switchboard_solana::FunctionAccountData;

declare_id!("D2H2soSaRnbPqJaq2QHtD5Lu7fGJMa9mAKwQCCCqHffB");

#[program]
pub mod fat_oracle {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        println!("hello owqrld");
        Ok(())
    }

    pub fn save_data(ctx: Context<SaveData>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

#[derive(Accounts)]
pub struct SaveData<'info> {
    // ... your required accounts to modify your program's state

    // We use this to derive and verify the functions enclave state
    #[account(
        constraint =
            function.load()?.validate(
              &enclave_signer.to_account_info()
            )?
    )]
    pub function: AccountLoader<'info, FunctionAccountData>,
    pub enclave_signer: Signer<'info>,
}
