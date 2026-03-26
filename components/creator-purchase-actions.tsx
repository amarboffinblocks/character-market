"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Package } from "@/lib/creator-data"
import { Check, Clock, Edit3, Sparkles } from "lucide-react"

interface CreatorPurchaseActionsProps {
  creatorName: string;
  startingPrice: number;
  packages?: Package[];
}

export function CreatorPurchaseActions({ creatorName, startingPrice, packages = [] }: CreatorPurchaseActionsProps) {
  const [selectedPackage, setSelectedPackage] = React.useState<Package | null>(null)
  const [step, setStep] = React.useState<'form' | 'review' | 'success'>('form')
  const [open, setOpen] = React.useState(false)

  // form state
  const [brief, setBrief] = React.useState("")
  const [charName, setCharName] = React.useState("")
  const [personality, setPersonality] = React.useState("")
  const [scenario, setScenario] = React.useState("")
  const [firstMessage, setFirstMessage] = React.useState("")
  const [references, setReferences] = React.useState("")
  const [notes, setNotes] = React.useState("")

  const handleOpen = (pkg: Package) => {
    setSelectedPackage(pkg)
    setStep('form')
    setOpen(true)
  }

  const handleReview = () => {
    setStep('review')
  }

  const handleSubmit = () => {
    setStep('success')
  }

  const closeDialog = () => {
    setOpen(false)
    setTimeout(() => {
      setStep('form')
      setBrief("")
      setCharName("")
      setPersonality("")
      setScenario("")
      setFirstMessage("")
      setReferences("")
      setNotes("")
    }, 300)
  }

  return (
    <div className="w-full space-y-6">
      {packages.length > 0 ? (
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 text-foreground">Available Packages</h3>
          {packages.map((pkg) => (
            <div key={pkg.id} className="rounded-xl border bg-card p-5 shadow-sm flex flex-col transition-transform hover:border-primary/50 relative overflow-hidden group">
              {pkg.id === 'premium' && (
                <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground rounded-bl-lg">
                  Best Value
                </div>
              )}
              <div className="mb-2">
                <h4 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">{pkg.name}</h4>
                <p className="text-sm font-bold text-accent">${pkg.price}</p>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">{pkg.description}</p>
              
              {pkg.scopeText && (
                <div className="text-xs bg-muted p-2 rounded-md mb-2 border border-border text-muted-foreground">
                  <span className="font-semibold text-foreground">Scope: </span>{pkg.scopeText}
                </div>
              )}
              {pkg.tokenSupport && (
                <div className="text-xs bg-muted p-2 rounded-md mb-4 border border-border text-muted-foreground flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span className="font-semibold text-foreground">Tokens: </span>{pkg.tokenSupport}
                </div>
              )}

              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {pkg.deliveryDays} Days Delivery
                </div>
                <div className="flex items-center gap-1">
                  <Edit3 className="w-3 h-3" /> {pkg.revisions} Revisions
                </div>
              </div>

              <div className="mb-4 flex-1">
                <p className="text-xs font-semibold uppercase text-muted-foreground mb-2">What's Included</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className="w-full text-sm font-semibold h-11 bg-primary hover:bg-primary/90 text-primary-foreground border-0 rounded-md transition-colors mt-auto"
                onClick={() => handleOpen(pkg)}
              >
                Select {pkg.name}
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <Button className="w-full text-sm font-semibold h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors">
            Purchase Pre-selected token count
          </Button>
          <Button variant="outline" className="w-full text-sm font-semibold h-12 rounded-md transition-colors">
            Purchase Custom
          </Button>
        </div>
      )}

      {/* Order Dialog */}
      <Dialog open={open} onOpenChange={(val) => !val && closeDialog()}>
        <DialogContent className="sm:max-w-[650px] p-0 max-h-[90vh] overflow-hidden flex flex-col">
          <div className="p-6 border-b shrink-0">
            <DialogTitle className="text-2xl font-bold">
              {step === 'form' ? 'Configure Your Request' : step === 'review' ? 'Review Your Order' : 'Order Placed!'}
            </DialogTitle>
            <DialogDescription className="mt-1">
              {step === 'form' ? `For ${creatorName}` : step === 'review' ? 'Please confirm your details before submitting.' : 'Your request has been sent to the creator.'}
            </DialogDescription>
          </div>

          <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
            {selectedPackage && step === 'form' && (
              <div className="space-y-6">
                {/* Package Summary Box */}
                <div className="bg-muted rounded-lg p-4 border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h5 className="font-bold text-lg text-primary">{selectedPackage.name}</h5>
                    <p className="text-sm text-muted-foreground">
                      {selectedPackage.deliveryDays} Days Delivery • {selectedPackage.revisions} Revisions
                    </p>
                    {selectedPackage.tokenSupport && (
                      <p className="text-xs text-muted-foreground mt-1">{selectedPackage.tokenSupport} • {selectedPackage.scopeText}</p>
                    )}
                  </div>
                  <div className="text-2xl font-bold">${selectedPackage.price}</div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-foreground">Project Brief *</label>
                    <textarea
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      className="w-full h-24 bg-background border border-input rounded-md p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm leading-relaxed resize-none transition-colors"
                      placeholder="Describe what you are looking for in general..."
                    ></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">Character Name</label>
                      <input
                        type="text"
                        value={charName}
                        onChange={(e) => setCharName(e.target.value)}
                        className="w-full bg-background border border-input rounded-md px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-colors"
                        placeholder="e.g. Orion"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-foreground">Personality Traits</label>
                      <input
                        type="text"
                        value={personality}
                        onChange={(e) => setPersonality(e.target.value)}
                        className="w-full bg-background border border-input rounded-md px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-colors"
                        placeholder="e.g. Stoic, loyal, sarcastic"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-foreground">Scenario Context</label>
                    <input
                      type="text"
                      value={scenario}
                      onChange={(e) => setScenario(e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-colors"
                      placeholder="Setting the scene for interaction..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-foreground">First Message Idea</label>
                    <input
                      type="text"
                      value={firstMessage}
                      onChange={(e) => setFirstMessage(e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-colors"
                      placeholder="How should the character greet the user?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-foreground">References / Links</label>
                    <input
                      type="text"
                      value={references}
                      onChange={(e) => setReferences(e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-colors"
                      placeholder="Links to Pinterest boards, wikis, or images..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5 text-foreground">Optional Notes</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full h-20 bg-background border border-input rounded-md p-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm leading-relaxed resize-none transition-colors"
                      placeholder="Anything else the creator should know?"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {selectedPackage && step === 'review' && (
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-5 border shadow-sm">
                  <h4 className="text-lg font-bold mb-4 border-b pb-2">Order Summary</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Creator</span>
                      <span className="font-medium text-foreground">{creatorName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Package</span>
                      <span className="font-medium text-primary">{selectedPackage.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery timeframe</span>
                      <span className="font-medium text-foreground">{selectedPackage.deliveryDays} Days</span>
                    </div>
                    {selectedPackage.tokenSupport && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Token Scope</span>
                        <span className="font-medium text-foreground">{selectedPackage.tokenSupport}</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-3 border-t">
                      <span className="font-bold text-base">Total Amount</span>
                      <span className="font-bold text-xl text-primary">${selectedPackage.price}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-5 border shadow-sm">
                  <h4 className="text-lg font-bold mb-4 border-b pb-2">Your Request</h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="block text-muted-foreground mb-1">Brief</span>
                      <p className="text-foreground bg-muted p-2 rounded">{brief || "None provided"}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-muted-foreground mb-1">Character Name</span>
                        <p className="text-foreground">{charName || "-"}</p>
                      </div>
                      <div>
                        <span className="block text-muted-foreground mb-1">Personality</span>
                        <p className="text-foreground">{personality || "-"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 'success' && (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Order Submitted!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Your request has been successfully sent to {creatorName}. You'll be notified once they accept it.
                </p>
              </div>
            )}
          </div>

          <div className="p-6 border-t bg-muted/40 shrink-0 flex items-center justify-end gap-3 button-group">
            {step === 'form' && (
              <>
                <Button variant="ghost" onClick={closeDialog}>Cancel</Button>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[120px]" 
                  onClick={handleReview}
                  disabled={!brief}
                >
                  Review Order
                </Button>
              </>
            )}
            {step === 'review' && (
              <>
                <Button variant="ghost" onClick={() => setStep('form')}>Back to Edit</Button>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground min-w-[120px]" 
                  onClick={handleSubmit}
                >
                  Confirm & Submit
                </Button>
              </>
            )}
            {step === 'success' && (
              <Button 
                variant="outline"
                className="min-w-[120px]" 
                onClick={closeDialog}
              >
                Close
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

