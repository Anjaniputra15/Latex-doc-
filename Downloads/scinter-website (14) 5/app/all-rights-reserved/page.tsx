import { NavBar } from '../../components/nav-bar'
import { Footer } from '../../components/footer'

export default function AllRightsReservedPage() {
  return (
    <main className="min-h-screen text-white bg-[#000033]">
      <NavBar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">All Rights Reserved</h1>
        <p className="mb-4">
          © {new Date().getFullYear()} ScInter. All rights reserved.
        </p>
        <p className="mb-4">
          All content, design, graphics, and other materials on this website are copyrighted by ScInter and protected by international copyright laws. The compilation of all content on this site is the exclusive property of ScInter.
        </p>
        <p className="mb-4">
          No part of this website may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of ScInter, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.
        </p>
        <p className="mb-4">
          For permission requests or further information, please contact us at:
        </p>
        <p className="mb-4">
          Email: legal@scinter.com
        </p>
      </div>
      <Footer />
    </main>
  )
}

