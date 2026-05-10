import { useState } from "react";
import { MessageCircle, ShoppingBag, Minus, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Product, formatNaira } from "@/lib/products";
import { SITE, waLink } from "@/lib/site";

export function CheckoutDialog({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const total = product.price * qty;
  const orderId = `PVT-${Date.now().toString().slice(-6)}`;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) {
      toast.error("Please fill your name, phone and delivery address.");
      return;
    }

    const message =
      `*PROVIC TECHNOLOGIES — ORDER SUMMARY*\n` +
      `Order ID: ${orderId}\n` +
      `Date: ${new Date().toLocaleString("en-NG")}\n\n` +
      `*Product:* ${product.name}\n` +
      `*Category:* ${product.category}\n` +
      `*Unit price:* ${formatNaira(product.price)}\n` +
      `*Quantity:* ${qty}\n` +
      `*Total:* ${formatNaira(total)}\n\n` +
      `*Customer*\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Address: ${address}\n` +
      (notes.trim() ? `Notes: ${notes}\n` : "") +
      `\nPlease confirm my order and share payment details. Thank you!`;

    const url = waLink(SITE.whatsappSales, message);
    // Open WhatsApp with the prefilled order summary
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp with your order summary…");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="hero" size="lg" className="w-full">
          <ShoppingBag className="h-5 w-5" /> Checkout Now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Checkout — {product.name}</DialogTitle>
          <DialogDescription>
            Fill your details. We'll send your order summary straight to WhatsApp for instant confirmation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submit} className="grid gap-3">
          <div className="flex items-center justify-between rounded-lg border border-border p-3">
            <span className="text-sm font-medium">Quantity</span>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                size="icon"
                variant="outline"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center font-semibold">{qty}</span>
              <Button
                type="button"
                size="icon"
                variant="outline"
                onClick={() => setQty((q) => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
          />
          <Textarea
            placeholder="Delivery address (Street, City, State)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={2}
          />
          <Textarea
            placeholder="Order notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
          />

          <div className="flex items-center justify-between rounded-lg bg-muted p-3 text-sm">
            <span className="text-muted-foreground">Total</span>
            <span className="text-lg font-bold text-gold">{formatNaira(total)}</span>
          </div>

          <DialogFooter>
            <Button type="submit" variant="whatsapp" size="lg" className="w-full">
              <MessageCircle className="h-5 w-5" /> Send Order to WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}