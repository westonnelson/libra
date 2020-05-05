initSidebarItems({"fn":[["encode_add_currency","Add a new currency of type `type_` to the system with exchange rate given by`exchange_rate_denom/exchange_rate_num and with the specified scaling_factor, andfractional_part"],["encode_add_validator_script","Encode a program adding `new_validator` to the pending validator set. Fails if the`new_validator` address is already in the validator set, already in the pending valdiator set,or does not have a `ValidatorConfig` resource stored at the address"],["encode_allow_child_accounts","Allows child accounts to be created for the calling account if it is a root VASP account."],["encode_apply_for_association_address","Applies for the sending account to be added to the set of association addresses encoded on-chain"],["encode_apply_for_association_privilege","Applies for the sending account to have the association privilege given by `privilege` to the sending account"],["encode_apply_for_child_vasp_credential","Applies for the sending account to be added as a child account for VAPS with root accountat `root_vasp_address`."],["encode_apply_for_parent_capability","Applies for the sending account to be added as a parent account for a VASP. The sendermust already be VASP account."],["encode_apply_for_root_vasp","Applies for the sending account to be added as a root VASP account."],["encode_approved_payment_script","Encode a program that deposits `amount` LBR in `payee`'s account if the `signature` on thepayment metadata matches the public key stored in the `payee`'s ApprovedPayment`resource.Aborts if the signature does not match,`payee`does not have an`ApprovedPayment`resource, orthe sender's balance is less than`amount`."],["encode_block_prologue_script",""],["encode_burn_script","Permanently destroy the coins stored in the oldest burn request under the `Preburn`resource stored at `preburn_address`. This will only succeed if the sender has a`MintCapability` stored under their account and `preburn_address` has a pending burn request"],["encode_cancel_burn_script","Cancel the oldest burn request from `preburn_address` and return the funds to`preburn_address`.  Fails if the sender does not have a published `MintCapability`."],["encode_create_account_script","Encode a program creating a fresh account at `account_address` with `initial_balance` coins transferred from the sender's account balance. Fails if there is already an account at `account_address` or if the sender's balance is lower than `initial_balance`."],["encode_grant_association_address","Grants the address at `addr` association privileges. `addr` must have previously appliedfor association privileges."],["encode_grant_association_privilege","Grants the address at `addr` the specific privilege given by `privilege`. `addr` musthave previously applied for the `privilege` privilege."],["encode_grant_child_account","Grants the account at `child_address` application to be a child account for the VASP thatthe sending account belongs to."],["encode_grant_parent_account","Grants the account at `parent_address` application to be a parent account w.r.t. the rootVASP at the sending account."],["encode_grant_vasp_account","Grants the account's application at `root_address` to be a root VASP account. The sendingaccount must have the association privilege: VASP::CreationPrivilege."],["encode_mint_lbr","Mints `amount_lbr` LBR from the sending account's constituent coins and deposits theresulting LBR into the sending account."],["encode_mint_script","Encode a program creating `amount` coins for sender"],["encode_preburn_script","Preburn `amount` coins from the sender's account. This will only succeed if the senderalready has a published `Preburn` resource."],["encode_publishing_option_script",""],["encode_recertify_child_account","Recertifies the child account at `child_address` if it has been previously decertified/removed"],["encode_register_approved_payment_script","Publish a newly created `ApprovedPayment` resource under the sender's account with approval key`public_key`. Aborts if the sender already has a published `ApprovedPayment` resource."],["encode_register_preburner_script","Publish a newly created `Preburn` resource under the sender's account.This will fail if the sender already has a published `Preburn` resource."],["encode_register_validator_script","Encode a program registering the sender as a candidate validator with the given key information.`network_signing_pubkey` should be a Ed25519 public key`network_identity_pubkey` should be a X25519 public key`consensus_pubkey` should be a Ed25519 public c=key."],["encode_remove_association_address","Removes the address at `addr` from the set of association addresses encoded on-chain."],["encode_remove_association_privilege","Removes the association privilege given by `privilege` from the account at `addr`."],["encode_remove_child_account","Removes the child account at `child_address`. It can be recertified in the future however."],["encode_remove_parent_account","Removes the parent account at `parent_address`. It can be recertified in the future however."],["encode_remove_validator_script","Encode a program adding `to_remove` to the set of pending validator removals. Fails ifthe `to_remove` address is already in the validator set or already in the pending removals."],["encode_rotate_consensus_pubkey_script","Encode a program that rotates the sender's consensus public key to `new_key`."],["encode_stdlib_script","Encode `stdlib_script` with arguments `args`. Note: this is not type-safe; the individual type-safe wrappers below should be used when possible."],["encode_transfer_script_with_padding","Encode a program transferring `amount` coins from `sender` to `recipient` but pad the output bytecode with unreachable instructions."],["encode_transfer_with_metadata_script","Encode a program transferring `amount` coins from `sender` to `recipient` with (optional) associated metadata `metadata` and (optional) `signature` on the metadata. The `metadata` and `signature` parameters are only required if `amount` >= 1000 LBR and the sender and recipient of the funds are two distinct VASPs. Fails if there is no account at the recipient address or if the sender's balance is lower than `amount`."],["encode_unmint_lbr","Unmints `amount_lbr` LBR from the sending account into the constituent coins and depositsthe resulting coins into the sending account."],["encode_update_exchange_rate","Updates the on-chain exchange rate to LBR for the given `currency` to be given by`new_exchange_rate_denominator/new_exchange_rate_numerator`."],["encode_update_libra_version",""],["encode_update_minting_ability","Allows--true--or disallows--false--minting of `currency` based upon `allow_minting`."],["get_transaction_name","Returns a user friendly mnemonic for the transaction type if the transaction is for a known, white listed, transaction."],["rotate_authentication_key_script","Encode a program that rotates the sender's authentication key to `new_key`. `new_key`should be a 256 bit sha3 hash of an ed25519 public key."]]});